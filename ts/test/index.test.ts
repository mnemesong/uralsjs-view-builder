import { it, describe } from "mocha";
import * as assert from "assert";
import { UralsjsViewBuilder, templateFunc } from "../src";

const replaceAll = (
    str: string, 
    search: string|RegExp, 
    replace: string
)  => str.split("")
        .filter((s) => s.replace(search, replace))
        .join("");

describe("UralsjsViewBuilder", () => {
    it("test 1", () => {
        const builder = (new UralsjsViewBuilder(templateFunc, 'ru'))
            .addAfterBodyHtmlBlock("<script>console.log('Hello');</script>")
            .addAfterBodyHtmlBlock("<script>console.log('world');</script>")
            .addHeadHtmlBlock("<meta charset='UTF-8'>")
            .addHeadHtmlBlock("<meta http-equiv='X-UA-Compatible' content='IE=edge'>")
            .addBodyHtmlBlock("<h1>Hello me!</h1>")
            .addBodyHtmlBlock("<p>And hello to everyone!</p>");
        const result = builder.render();
        const nominal = `<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    </head>
    <body>
        <h1>Hello me!</h1>
        <p>And hello to everyone!</p>
    </body>
        <script>console.log('Hello');</script>
        <script>console.log('world');</script>
</html>`
        assert.strictEqual(replaceAll(result, /\s*/, ""), 
            replaceAll(nominal, /\s*/, ""));
    })
})