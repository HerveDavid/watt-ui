import { LitElement, TemplateResult, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { defaultTheme } from "../../styles/defaultTheme";

@customElement('watt-button')
export default class Button extends LitElement {

    static styles = css`
        button {
            background-color: ${defaultTheme.colorSurfaceRaised};
            color: ${defaultTheme.colorAccent};
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        button:hover {
            background-color: ${defaultTheme.colorOverlay}
        }

        button:focus {
            background-color: ${defaultTheme.colorSurfaceLowered}
        }

        button[disabled] {
            background-color: ${defaultTheme.colorBackground};
            color: ${defaultTheme.colorTextWeakest};
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: not-allowed;
        } 
    `;

    @property({ type: Boolean })
    disabled = false;

    protected render(): TemplateResult {
        return html`
            <button ?disabled=${this.disabled}>
               <slot></slot>
            </button>
        `
    }

}