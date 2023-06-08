"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var assert = __importStar(require("assert"));
var src_1 = require("../src");
var replaceAll = function (str, search, replace) { return str.split("")
    .filter(function (s) { return s.replace(search, replace); })
    .join(""); };
(0, mocha_1.describe)("UralsjsViewBuilder", function () {
    (0, mocha_1.it)("test 1", function () {
        var builder = (new src_1.UralsjsViewBuilder(src_1.templateFunc, 'ru'))
            .addAfterBodyHtmlBlock("<script>console.log('Hello');</script>")
            .addAfterBodyHtmlBlock("<script>console.log('world');</script>")
            .addHeadHtmlBlock("<meta charset='UTF-8'>")
            .addHeadHtmlBlock("<meta http-equiv='X-UA-Compatible' content='IE=edge'>")
            .addBodyHtmlBlock("<h1>Hello me!</h1>")
            .addBodyHtmlBlock("<p>And hello to everyone!</p>");
        var result = builder.render();
        var nominal = "<!DOCTYPE html>\n<html lang=\"ru\">\n    <head>\n        <meta charset='UTF-8'>\n        <meta http-equiv='X-UA-Compatible' content='IE=edge'>\n    </head>\n    <body>\n        <h1>Hello me!</h1>\n        <p>And hello to everyone!</p>\n    </body>\n        <script>console.log('Hello');</script>\n        <script>console.log('world');</script>\n</html>";
        assert.strictEqual(replaceAll(result, /\s*/, ""), replaceAll(nominal, /\s*/, ""));
    });
    (0, mocha_1.it)("test 2", function () {
        var builder = (new src_1.UralsjsViewBuilder(src_1.templateFunc, 'ru'))
            .addAfterBodyHtmlBlock("<script>console.log('Hello');</script>")
            .addHeadHtmlBlock("<meta charset='UTF-8'>")
            .addBodyHtmlBlock("<h1>Hello me!</h1>")
            .cache();
        var result = builder.render();
        var nominal = "<!DOCTYPE html>\n<html lang=\"ru\">\n    <head>\n        <meta charset='UTF-8'>\n    </head>\n    <body>\n        <h1>Hello me!</h1>\n    </body>\n        <script>console.log('Hello');</script>\n</html>";
        assert.strictEqual(replaceAll(result, /\s*/, ""), replaceAll(nominal, /\s*/, ""));
        var builder2 = builder
            .addAfterBodyHtmlBlock("<script>console.log('world');</script>")
            .addHeadHtmlBlock("<meta http-equiv='X-UA-Compatible' content='IE=edge'>")
            .addBodyHtmlBlock("<p>And hello to everyone!</p>");
        var result2 = builder.render();
        var nominal2 = "<!DOCTYPE html>\n<html lang=\"ru\">\n    <head>\n        <meta charset='UTF-8'>\n        <meta http-equiv='X-UA-Compatible' content='IE=edge'>\n    </head>\n    <body>\n        <h1>Hello me!</h1>\n        <p>And hello to everyone!</p>\n    </body>\n        <script>console.log('Hello');</script>\n        <script>console.log('world');</script>\n</html>";
        assert.strictEqual(replaceAll(result2, /\s*/, ""), replaceAll(nominal2, /\s*/, ""));
    });
});
