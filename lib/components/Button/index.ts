import { LitElement, TemplateResult, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('watt-button')
export default class Button extends LitElement {

    static styles = css`
       button {
        color: green;
       }
    `;

    protected render(): TemplateResult {
        return html`
            <button>
                <slot></slot>
            </button>
        `
    }

}