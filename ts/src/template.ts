export function template(
    language: string = "", 
    head: string = "",
    body: string = "",
    afterBody: string = ""
) {
    return `<!DOCTYPE html>
<html lang="${language}">
    <head>
        ${head}
    </head>
    <body>
        ${body}
    </body>
    ${afterBody}
</html>`;
}

export type Template = typeof template;