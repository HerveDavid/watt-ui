import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { defaultTheme } from "../../styles/themes";


@customElement('watt-header')
export default class Header extends LitElement {
    
    static styles = css`
        :host {
            background-color: ${ defaultTheme.colorAccent };
            color: ${ defaultTheme.colorText }
        }
    `;

    @property() label?: String = "Crofto";

    protected render(): TemplateResult {
        return html`
            <div class="watt-header">
                <p>${this.label}</p>
                <h3>gflkjlk</h3>
                <slot></slot>
            </div>
        `
    }

}