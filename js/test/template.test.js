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
var template_1 = require("../src/template");
(0, mocha_1.describe)("test template", function () {
    (0, mocha_1.it)("test template", function () {
        var result = (0, template_1.template)("en", "<title>Hello world</title>", "<div>!!!</div>", "<script>console.log('afterBody');</script>");
        var nominal = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>Hello world</title>\n    </head>\n    <body>\n        <div>!!!</div>\n    </body>\n    <script>console.log('afterBody');</script>\n</html>";
        assert.strictEqual(result, nominal);
    });
});
