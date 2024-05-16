import { LitElement, TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyle } from "./style";

@customElement('watt-button')
export default class Button extends LitElement {

    static styles = buttonStyle;

    @property({type: Boolean})
    disabled = false;

    protected render(): TemplateResult {
        return html`
            <button ?disabled=${this.disabled}>
               <slot></slot>
            </button>
        `
    }

}