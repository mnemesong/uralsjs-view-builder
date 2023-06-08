"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
function template(language, head, body, afterBody) {
    if (language === void 0) { language = ""; }
    if (head === void 0) { head = ""; }
    if (body === void 0) { body = ""; }
    if (afterBody === void 0) { afterBody = ""; }
    return "<!DOCTYPE html>\n<html lang=\"".concat(language, "\">\n    <head>\n        ").concat(head, "\n    </head>\n    <body>\n        ").concat(body, "\n    </body>\n    ").concat(afterBody, "\n</html>");
}
exports.template = template;
