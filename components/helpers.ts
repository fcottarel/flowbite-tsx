

/**
 * Replace class in html string
 * 
 * @param htmlString original Html
 * @param newClasses new classes to replace
 * @returns original html if not "class" attribute found, or edited html with newclasses
 */
export function replaceHtmlClasses(htmlString: string, newClasses: string): string {
    const classAttributeRegex = /class\s*=\s*(["']?)(.*?)\1/g;
    const result = htmlString.replace(classAttributeRegex, (_, quote, __) => {
        const quoteChar = quote || '"';
        return `class=${quoteChar}${newClasses}${quoteChar}`;
    });

    return result;
}