# uralsjs-view-builder

## Example
```typescript
export function templateFunc(
    language: string = "", 
    head: string = "",
    body: string = "",
    afterBody: string = ""
) {
    return `<!DOCTYPE html>
<html lang="${language}">
    <head>${head}</head>
    <body>${body}</body>
    ${afterBody}
</html>`;
}

const builder = (new UralsjsViewBuilder(templateFunc, 'ru'))
    .addAfterBodyHtmlBlock("<script>console.log('Hello');</script>")
    .addAfterBodyHtmlBlock("<script>console.log('world');</script>")
    .addHeadHtmlBlock("<meta charset='UTF-8'>")
    .addHeadHtmlBlock("<meta http-equiv='X-UA-Compatible' content='IE=edge'>")
    .addBodyHtmlBlock("<h1>Hello me!</h1>")
    .addBodyHtmlBlock("<p>And hello to everyone!</p>");

const result = builder.render();
//<!DOCTYPE html>
//<html lang="ru">
//    <head>
//        <meta charset='UTF-8'>
//        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
//    </head>
//    <body>
//        <h1>Hello me!</h1>
//        <p>And hello to everyone!</p>
//    </body>
//        <script>console.log('Hello');</script>
//        <script>console.log('world');</script>
//</html>
```

## API
```typescript
/**
 * Default template function
 */
export function templateFunc(
    language: string = "", 
    head: string = "",
    body: string = "",
    afterBody: string = ""
): string;

/**
 * Builder for insert and cache data into view
 */
export class UralsjsViewBuilder<Lang extends string>
{
    constructor(template: Template, language: Lang) {...}

    public addHeadHtmlBlock(code: string): UralsjsViewBuilder<Lang> {...}

    public setLanguage(lang: Lang): UralsjsViewBuilder<Lang> {...}

    public addBodyHtmlBlock(bodyHtmlBlock: string): UralsjsViewBuilder<Lang> {...}

    public addAfterBodyHtmlBlock(afterBodyHtmlBlock: string): UralsjsViewBuilder<Lang> {...}

    public cache(): UralsjsViewBuilder<Lang> {...}

    public render(): string {...}
}
```

## Author
Anatoly Starodubtsev
Tostar74@mail.ru

## License
MIT