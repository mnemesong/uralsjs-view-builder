"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UralsjsViewBuilder = exports.templateFunc = void 0;
var template_1 = require("./template");
exports.templateFunc = template_1.template;
var UralsjsViewBuilder = /** @class */ (function () {
    function UralsjsViewBuilder(template, language) {
        this.head = [];
        this.body = [];
        this.afterBody = [];
        this.template = template;
        this.language = language;
    }
    UralsjsViewBuilder.prototype.addHeadHtmlBlock = function (code) {
        this.head = this.head.concat([code]);
        return this;
    };
    UralsjsViewBuilder.prototype.setLanguage = function (lang) {
        this.language = lang;
        return this;
    };
    UralsjsViewBuilder.prototype.addBodyHtmlBlock = function (bodyHtmlBlock) {
        this.body = this.body.concat([bodyHtmlBlock]);
        return this;
    };
    UralsjsViewBuilder.prototype.addAfterBodyHtmlBlock = function (afterBodyHtmlBlock) {
        this.afterBody = this.afterBody.concat([afterBodyHtmlBlock]);
        return this;
    };
    UralsjsViewBuilder.prototype.cache = function () {
        var _this = this;
        var headHtml = this.head.join("\n");
        var bodyHtml = this.body.join("\n");
        var afterBodyHtml = this.afterBody.join("\n");
        this.template = function (language, head, body, afterBody) {
            if (language === void 0) { language = ""; }
            if (head === void 0) { head = ""; }
            if (body === void 0) { body = ""; }
            if (afterBody === void 0) { afterBody = ""; }
            return _this.template(language, headHtml + head, bodyHtml + body, afterBodyHtml + afterBody);
        };
        this.body = [];
        this.afterBody = [];
        this.head = [];
        return this;
    };
    UralsjsViewBuilder.prototype.render = function () {
        return this.template(this.language, this.head.join("\n"), this.body.join("\n"), this.afterBody.join("\n"));
    };
    return UralsjsViewBuilder;
}());
exports.UralsjsViewBuilder = UralsjsViewBuilder;
