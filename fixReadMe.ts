/*
THIS FILE WAS MOSTLY WRITTEN BY Claude Opus 4.6 and Claude Haiku 4.5
*/
import { readFileSync, writeFileSync } from 'node:fs';

class ReadmeFixer {
    static readonly FileName = "definitions.md";
    private content: string;
    constructor() {
        this.content = readFileSync(ReadmeFixer.FileName, 'utf8').replaceAll('\r\n', '\n');
    }

    addMissingFootnotesReferences(): this {
        this.content = this.content.replaceAll(/\[\^([^\]]+)\]/g, (match, id: string) =>
            `[^${id.replaceAll(' ', '-')}]`
        );

        const footNotesIndex = this.content.indexOf('\n## Foot Notes');
        const beforeFootNotes = footNotesIndex === -1 ? this.content : this.content.substring(0, footNotesIndex);
        const footNotesSection = footNotesIndex === -1 ? '' : this.content.substring(footNotesIndex);

        // Collect unique footnote definitions
        const footnotes = Object.fromEntries(
            [...beforeFootNotes.matchAll(/^\s*\[(\^[^\]]+)\]:\s*(.+)$/gm)]
                .map(m => [m[1].trim(), m[2].trim()])
        );

        // For each footnote, add [^ABBR] after bare occurrences of the abbreviation
        // Only process the content before Foot Notes section
        let processedContent = beforeFootNotes;
        for (const key of Object.keys(footnotes)) {
            const abbr = key.slice(1); // strip leading ^
            const escaped = abbr.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
            // Allow hyphens in footnote IDs to also match spaces in the text
            const flexible = escaped.replaceAll('-', '[- ]');
            
            // Process line by line to check if match is inside backticks
            processedContent = processedContent.split('\n').map(line => {
                // Check if line is inside a code block (starts with ```)
                if (line.trim().startsWith('```')) return line;
                
                // Replace only matches that are NOT inside backticks
                let result = '';
                let inBackticks = false;
                let lastIndex = 0;
                
                const regex = new RegExp(`\\b(${flexible})\\b(?!\\[\\^)(?!\\])(?!\\()`, 'g');
                let match: RegExpExecArray | null;
                
                while ((match = regex.exec(line)) !== null) {
                    // Count backticks before this match to determine if we're inside backticks
                    const beforeMatch = line.substring(0, match.index);
                    const backtickCount = (beforeMatch.match(/`/g) || []).length;
                    
                    // Only add footnote if we're not inside backticks (even count = outside)
                    if (backtickCount % 2 === 0) {
                        result += beforeMatch.substring(lastIndex) + match[1] + `[^${abbr}]`;
                        lastIndex = match.index + match[1].length;
                    }
                }
                
                result += line.substring(lastIndex);
                return result === '' ? line : result;
            }).join('\n');
        }

        this.content = processedContent + footNotesSection;

        // Deduplicate footnote definitions
        const seen = new Set<string>();
        this.content = this.content.replaceAll(/^\s*\[\^[^\]]+\]:\s*.+$/gm, (match) => {
            const key = new RegExp(/\[\^([^\]]+)\]/).exec(match)?.[1];
            if (key && seen.has(key)) {
                return '';
            }
            if (key) { 
                seen.add(key);
            }
            return match;
        });

        return this;
    }

    generateTableOfContents(): this {
        this.content = this.content.replaceAll(/^<a name="[^"]*"><\/a>\n/gm, '');

        const tocEntries: string[] = [];
        const lines = this.content.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const match = new RegExp(/^(#{2,6})\s+(.+)$/).exec(lines[i]);
            if (!match) {
                continue;
            }

            // Skip if previous line has <!-- skipForTableContent -->
            if (i > 0 && lines[i - 1].includes('<!-- skipForTableContent -->')){
                continue;
            } 

            const [, hashes, title] = match;
            const depth = hashes.length - 2;
            const slug = title.toLowerCase().replaceAll(/[^\w\s-]/g, '').replaceAll(/\s+/g, '-');
            const indent = '  '.repeat(depth);

            // Add anchor before heading
            lines[i] = `<a name="${slug}"></a>\n${lines[i]}`;
            tocEntries.push(`${indent}- [${title}](#${slug}) *line ${i}*`);
        }

        const toc = `<!-- reservedForToc -->\n${tocEntries.join('\n')}`;
        this.content = lines.join('\n');

        // Replace existing TOC block
        this.content = this.content.replace(
            /^<!-- reservedForToc -->\n(?:[\t ]*-.*\n?)*/m,
            toc + '\n'
        );

        return this;
    }

    updateTimestamp(): this {
        this.content = this.content.replace(/^Last updated:.*$/m, `Last updated: *${new Date().toLocaleString()}*`);
        return this;
    }

    collapseWhitespace(): this {
        this.content = this.content.replaceAll(/\n{3,}/g, '\n\n');
        return this;
    }

    rewrite(): void {
        this.addMissingFootnotesReferences();
        this.generateTableOfContents();
        this.updateTimestamp();
        this.collapseWhitespace();
        writeFileSync(ReadmeFixer.FileName, this.content, 'utf8');
    }
}

new ReadmeFixer().rewrite();
