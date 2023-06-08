import { it, describe } from "mocha";
import * as assert from "assert";
import { template } from "../src/template";

describe("test template", () => {
    it("test template", () => {
        const result = template("en", "<title>Hello world</title>",
            "<div>!!!</div>", "<script>console.log('afterBody');</script>");
        const nominal = 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hello world</title>
    </head>
    <body>
        <div>!!!</div>
    </body>
    <script>console.log('afterBody');</script>
</html>`;
        assert.strictEqual(result, nominal);
    })
})