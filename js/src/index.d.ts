import { Template, template } from "./template";
export declare const templateFunc: typeof template;
export declare class UralsjsViewBuilder<Lang extends string> {
    private head;
    private language;
    private body;
    private afterBody;
    private template;
    constructor(template: Template, language: Lang);
    addHeadHtmlBlock(code: string): UralsjsViewBuilder<Lang>;
    setLanguage(lang: Lang): UralsjsViewBuilder<Lang>;
    addBodyHtmlBlock(bodyHtmlBlock: string): UralsjsViewBuilder<Lang>;
    addAfterBodyHtmlBlock(afterBodyHtmlBlock: string): UralsjsViewBuilder<Lang>;
    cache(): UralsjsViewBuilder<Lang>;
    render(): string;
}
