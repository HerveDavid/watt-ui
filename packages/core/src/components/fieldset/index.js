var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let WattFieldset = class WattFieldset extends LitElement {
    constructor() {
        super(...arguments);
        this.label = "";
        this.required = false;
        this.hideRequired = false;
        this.hideLabel = false;
        this.size = "m";
    }
    render() {
        return html `
      <fieldset aria-required=${this.required} aria-invalid=${!!this.error}>
        <legend>
          <slot name="label">${this.label}</slot>
          ${this.required
            ? html `<span class="required" aria-hidden="true">*</span>`
            : ""}
        </legend>

        <slot></slot>

        ${this.hint || this._hasHintSlot()
            ? html `
              <div class="hint" id="hint">
                <slot name="hint">${this.hint}</slot>
              </div>
            `
            : ""}
        ${this.error || this._hasErrorSlot()
            ? html `
              <div class="error" id="error" role="alert">
                <slot name="error">${this.error}</slot>
              </div>
            `
            : ""}
      </fieldset>
    `;
    }
    _hasHintSlot() {
        return !!this.querySelector('[slot="hint"]');
    }
    _hasErrorSlot() {
        return !!this.querySelector('[slot="error"]');
    }
};
WattFieldset.styles = css `
    :host {
      display: block;
      font-family: var(--n-font-family);
    }

    fieldset {
      margin: 0;
      padding: var(--n-space-m);
      border: 1px solid var(--n-color-border);
      border-radius: var(--n-border-radius);
    }

    legend {
      padding: 0 var(--n-space-xs);
      color: var(--n-color-text);
      font-weight: var(--n-font-weight);
      font-size: var(--n-font-size-m);
      line-height: var(--n-line-height);
    }

    :host([size="s"]) legend {
      font-size: var(--n-font-size-s);
    }

    :host([hide-label]) legend {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    .required {
      color: var(--n-color-text-error);
      margin-left: var(--n-space-xs);
    }

    :host([hide-required]) .required {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    .hint {
      margin-top: var(--n-space-xs);
      color: var(--n-color-text-weak);
      font-size: var(--n-font-size-s);
    }

    .error {
      margin-top: var(--n-space-xs);
      color: var(--n-color-text-error);
      font-size: var(--n-font-size-s);
    }

    :host([error]) fieldset {
      border-color: var(--n-color-text-error);
    }
  `;
__decorate([
    property({ type: String, reflect: true })
], WattFieldset.prototype, "label", void 0);
__decorate([
    property({ type: String })
], WattFieldset.prototype, "hint", void 0);
__decorate([
    property({ type: String, reflect: true })
], WattFieldset.prototype, "error", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattFieldset.prototype, "required", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: "hide-required" })
], WattFieldset.prototype, "hideRequired", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: "hide-label" })
], WattFieldset.prototype, "hideLabel", void 0);
__decorate([
    property({ type: String, reflect: true })
], WattFieldset.prototype, "size", void 0);
WattFieldset = __decorate([
    customElement("watt-fieldset")
], WattFieldset);
export { WattFieldset };
//# sourceMappingURL=index.js.map