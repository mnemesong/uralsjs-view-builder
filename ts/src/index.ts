import { Template, template } from "./template";

export const templateFunc = template;

export class UralsjsViewBuilder<Lang extends string>
{
    private head: string[] = [];
    private language: Lang;
    private body: string[] = [];
    private afterBody: string[] = [];
    private template: Template;

    constructor(template: Template, language: Lang) {
        this.template = template;
        this.language = language;
    }

    public addHeadHtmlBlock(code: string): UralsjsViewBuilder<Lang> {
        this.head = this.head.concat([code]);
        return this;
    }

    public setLanguage(lang: Lang): UralsjsViewBuilder<Lang> {
        this.language = lang;
        return this;
    }

    public addBodyHtmlBlock(bodyHtmlBlock: string): UralsjsViewBuilder<Lang> {
        this.body = this.body.concat([bodyHtmlBlock]);
        return this;
    }

    public addAfterBodyHtmlBlock(afterBodyHtmlBlock: string): UralsjsViewBuilder<Lang> {
        this.afterBody = this.afterBody.concat([afterBodyHtmlBlock]);
        return this;
    }

    public cache(): UralsjsViewBuilder<Lang> {
        const headHtml = this.head.join("\n");
        const bodyHtml = this.body.join("\n");
        const afterBodyHtml = this.afterBody.join("\n");
        this.template = (
            language: string = "", 
            head: string = "",
            body: string = "",
            afterBody: string = ""
        ) => this.template(language, headHtml + head, bodyHtml + body, 
            afterBodyHtml + afterBody);
        this.body = [];
        this.afterBody = [];
        this.head = [];
        return this;
    }

    public render(): string
    {
        return this.template(this.language, this.head.join("\n"), 
            this.body.join("\n"), this.afterBody.join("\n"));
    }
}