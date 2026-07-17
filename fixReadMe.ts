/*
THIS FILE WAS 95% WRITTEN BY Claude Opus 4.6 and Claude Haiku 4.5

THIS CODE IS EXTREMELY FRAGILE AND WILL FUCK UP README.MD IF MODIFIED WRONGLY
*/
import { readFileSync, writeFileSync } from 'node:fs';

class ReadmeFixer {
    static readonly FileName = "definitions.md";
    private content: string;
    constructor() {
        this.content = readFileSync(ReadmeFixer.FileName, 'utf8').replaceAll('\r\n', '\n');
    }

    addMissingFootnotesReferences(): this {
        const footNotesIndex = this.content.indexOf('\n## Foot Notes');
        const beforeFootNotes = footNotesIndex === -1 ? this.content : this.content.substring(0, footNotesIndex);
        const footNotesSection = footNotesIndex === -1 ? '' : this.content.substring(footNotesIndex);

        const footnotes = Object.fromEntries(
            [...footNotesSection.matchAll(/^\s*\[(\^[^\]]+)\]:\s*(.+)$/gm)]
                .map(match => [match[1].trim(), match[2].trim()])
        ) as Record<string, string>;

        this.content = this.content.replaceAll(/\[\^([^\]]+)\]/g, (match, id: string) => {
            return `[^${id.replaceAll(' ', '-')}]`;
        });

        // Remove existing footnote references from the editable section so the pass is idempotent.
        let cleanedContent = beforeFootNotes.replaceAll(/\[\^[^\]]+\]/g, '');

        // For each footnote, add [^ABBR] after bare occurrences of the abbreviation.
        // Only process the content before Foot Notes section.
        let processedContent = cleanedContent;
        for (const key of Object.keys(footnotes)) {
            const abbr = key.slice(1);
            const escaped = abbr.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
            const flexible = escaped.replaceAll('-', '[- ]');
            const footnoteMarker = `[^${abbr}]`;

            processedContent = processedContent.split('\n').map(line => {
                const trimmedLine = line.trim();

                if (trimmedLine.startsWith('```') || line.includes('#')) return line;

                let updatedLine = line;
                const protectedSegments: string[] = [];
                const protectSegment = (value: string) => {
                    const token = `__FN_PLACEHOLDER_${protectedSegments.length}__`;
                    protectedSegments.push(value);
                    return token;
                };

                const codeSpanRegex = /`[^`]*`/g;
                updatedLine = updatedLine.replace(codeSpanRegex, (segment) => {
                    const content = segment.slice(1, -1);
                    const termRegex = new RegExp(`\\b${flexible}\\b`, 'i');
                    return termRegex.test(content) ? protectSegment(`${segment}${footnoteMarker}`) : segment;
                });

                const quotedKeyRegex = new RegExp(`"(${flexible})"(\\s*:)`, 'gi');
                updatedLine = updatedLine.replace(quotedKeyRegex, (_match, captured: string, colonPart: string) => protectSegment(`"${captured}"${colonPart}${footnoteMarker}`));

                const plainTextRegex = new RegExp(`\\b(${flexible})\\b(?!\\[\\^)(?!\\])(?!\\()`, 'gi');
                updatedLine = updatedLine.replace(plainTextRegex, (match, _captured: string, offset: number, fullLine: string) => {
                    const beforeMatch = fullLine.slice(0, offset);
                    const backtickCount = (beforeMatch.match(/`/g) || []).length;
                    return backtickCount % 2 === 0 ? `${match}${footnoteMarker}` : match;
                });

                for (let i = 0; i < protectedSegments.length; i++) {
                    updatedLine = updatedLine.replace(`__FN_PLACEHOLDER_${i}__`, protectedSegments[i]);
                }

                return updatedLine;
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
        this.content = this.content.replaceAll(/^<!-- snippetSummaryIndex -->\n(?:- .*\n)+<!-- \/snippetSummaryIndex -->\n?/gm, '');
        this.content = this.content.replaceAll(/^### Code Block Summaries\n(?:- .*\n)+/gm, '');
        this.content = this.content.replaceAll(/^<details>\n<summary>All Code Blocks<\/summary>\n\n<\/details>\n?/gm, '');
        this.content = this.content.replaceAll(/^<details>\s*<summary>All Code Blocks<\/summary>\s*<\/details>$/gm, '');

        const tocEntries: string[] = [];
        const snippetSummaryLinks: string[] = [];
        const lines = this.content.split('\n');
        const slugify = (value: string) => value.toLowerCase().replaceAll(/[^\w\s-]/g, '').replaceAll(/\s+/g, '-');
        const stripFootnotes = (value: string) => value.replaceAll(/\[\^[^\]]+\]/g, '');

        let currentHeadingDepth = 0;
        let inSnippetsSection = false;
        let inDetailsBlock = false;
        let snippetsHeadingIndex = -1;
        let inFootNotesSection = false;

        const hasCodeBlockBelow = (startIndex: number): boolean => {
            for (let index = startIndex + 1; index < lines.length; index++) {
                const nestedLine = lines[index].trim();
                if (nestedLine === '</details>') {
                    return false;
                }
                if (/^```(?:\w+)?\s*$/.test(nestedLine)) {
                    return true;
                }
            }
            return false;
        };

        for (let i = 0; i < lines.length; i++) {
            const match = new RegExp(/^(#{2,6})\s+(.+)$/).exec(lines[i]);
            if (!match) {
                const summaryMatch = new RegExp(/^<summary>(.+)<\/summary>$/).exec(lines[i].trim());
                if (summaryMatch && inDetailsBlock && !inSnippetsSection && hasCodeBlockBelow(i)) {
                    const summaryText = summaryMatch[1].replaceAll(/<a name="[^"]*"><\/a>/g, '').trim();
                    const cleanSummaryText = stripFootnotes(summaryText).trim();
                    const slug = `snippet-${slugify(cleanSummaryText)}-${i + 1}`;
                    const previousLine = i > 0 ? lines[i - 1].trim() : '';

                    if (previousLine !== '<!-- skipForTableContent -->') {
                        lines.splice(i, 0, '<!-- skipForTableContent -->');
                        i += 1;
                    }

                    lines[i] = `<summary><a name="${slug}"></a>${cleanSummaryText}</summary>`;
                    snippetSummaryLinks.push(`- <a href="#${slug}">${cleanSummaryText}</a>`);
                }

                if (lines[i].trim() === '<details>') {
                    inDetailsBlock = true;
                } else if (lines[i].trim() === '</details>') {
                    inDetailsBlock = false;
                }
                continue;
            }

            // Skip if previous line has <!-- skipForTableContent -->
            if (i > 0 && lines[i - 1].includes('<!-- skipForTableContent -->')) {
                continue;
            }

            const [, hashes, title] = match;
            const depth = hashes.length - 2;
            const cleanTitle = stripFootnotes(title).trim();
            const slug = slugify(cleanTitle);
            const indent = '  '.repeat(depth);

            currentHeadingDepth = depth;
            if (depth === 0) {
                inSnippetsSection = slug === 'snippets';
                if (inSnippetsSection) {
                    snippetsHeadingIndex = i;
                }
                inFootNotesSection = slug === 'foot-notes';
                if (inFootNotesSection) {
                    break;
                }
            }

            // Add anchor before heading
            lines[i] = `<a name="${slug}"></a>\n${lines[i]}`;
            tocEntries.push(`${indent}- [${cleanTitle}](#${slug}) *line ${i}*`);

            if (lines[i].trim() === '<details>') {
                inDetailsBlock = true;
            } else if (lines[i].trim() === '</details>') {
                inDetailsBlock = false;
            }
        }

        if (snippetSummaryLinks.length > 0 && snippetsHeadingIndex !== -1) {
            const snippetContentStartIndex = lines.findIndex((line, index) => index > snippetsHeadingIndex && line.trim() === '### PeerID');
            const insertionPoint = snippetsHeadingIndex + 1;
            const deleteCount = snippetContentStartIndex === -1 ? 0 : Math.max(0, snippetContentStartIndex - insertionPoint);
            const snippetIndexBlock = [
                '',
                '<details>',
                '<summary>All Code Blocks</summary>',
                '',
                '<!-- snippetSummaryIndex -->',
                ...snippetSummaryLinks,
                '<!-- /snippetSummaryIndex -->',
                '',
                '</details>',
                ''
            ];
            if (snippetContentStartIndex !== -1) {
                lines.splice(insertionPoint, deleteCount, ...snippetIndexBlock);
            } else {
                lines.splice(insertionPoint, 0, ...snippetIndexBlock);
            }
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
