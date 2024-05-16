import { LitElement, TemplateResult, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('watt-button')
export default class Button extends LitElement {

    static styles = css``;

    protected render(): TemplateResult {
        return html`
            <button>
                <slot></slot>
            </button>
        `
    }

}