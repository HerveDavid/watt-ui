import { LitElement, TemplateResult, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { defaultTheme } from "../../styles/defaultTheme";

@customElement('watt-layout')
export default class Layout extends LitElement {

    static styles = css`
        :host {
            background-color: ${ defaultTheme.colorBackground };
        }
    `;

    protected render(): TemplateResult {
        return html`
            <div>
                <slot></slot>
            </div>
        `
    }

}