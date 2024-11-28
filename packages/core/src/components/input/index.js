var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
let WattInput = class WattInput extends LitElement {
    constructor() {
        super(...arguments);
        this.type = "text";
        this.label = "";
        this.value = "";
        this.placeholder = "";
        this.name = "";
        this.size = "m";
        this.expand = false;
        this.hideLabel = false;
        this.required = false;
        this.hideRequired = false;
        this.autocomplete = "off";
        this.readonly = false;
        this.disabled = false;
    }
    select() {
        this.input?.select();
    }
    setSelectionRange(start, end, direction) {
        this.input?.setSelectionRange(start, end, direction);
    }
    setRangeText(replacement, start, end, selectMode) {
        if (this.input) {
            // Si start/end ne sont pas fournis, utilise la sélection actuelle
            const selStart = start !== undefined ? start : this.input.selectionStart || 0;
            const selEnd = end !== undefined ? end : this.input.selectionEnd || 0;
            this.input.setRangeText(replacement, selStart, selEnd, selectMode || "preserve");
        }
    }
    getNativeElement() {
        return this.input;
    }
    focus(options) {
        this.input?.focus(options);
    }
    blur() {
        this.input?.blur();
    }
    click() {
        this.input?.click();
    }
    handleInput(e) {
        const target = e.target;
        this.value = target.value;
        this.dispatchEvent(new CustomEvent("watt-input", {
            detail: {
                value: this.value,
                originalEvent: e,
            },
            bubbles: true,
            composed: true,
        }));
    }
    handleChange(e) {
        const target = e.target;
        this.value = target.value;
        this.dispatchEvent(new CustomEvent("watt-change", {
            detail: {
                value: this.value,
                originalEvent: e,
            },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `
      <div class="input-container">
        ${this.label
            ? html `
              <label
                for="input-${this.name}"
                class="${this.hideLabel ? "visually-hidden" : ""}"
              >
                ${this.label}
                ${this.required && !this.hideRequired
                ? html `<span class="required">*</span>`
                : ""}
              </label>
            `
            : ""}

        <div class="input-wrapper">
          <slot name="start"></slot>
          <input
            id="input-${this.name}"
            type=${this.type}
            .value=${this.value}
            placeholder=${this.placeholder || ""}
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?readonly=${this.readonly}
            name=${this.name || ""}
            autocomplete=${this.autocomplete}
            pattern=${this.disallowPattern ? `[^${this.disallowPattern}]*` : ""}
            @input=${this.handleInput}
            @change=${this.handleChange}
            @select=${(e) => this.dispatchEvent(new CustomEvent("select", {
            detail: { originalEvent: e },
            bubbles: true,
            composed: true,
        }))}
          />
          <slot name="end"></slot>
        </div>

        ${this.hint || this.error
            ? html ` <div class="helper-text">${this.error || this.hint}</div> `
            : ""}
      </div>
    `;
    }
};
WattInput.styles = css `
    :host {
      display: block;
      font-family: var(--n-font-family);
    }

    :host([expand]) {
      width: 100%;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: var(--n-space-xs);
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
    }

    label {
      color: var(--n-color-text);
      font-size: var(--n-font-size-s);
      font-weight: var(--n-font-weight);
      line-height: var(--n-line-height-caption);
    }

    input {
      width: 100%;
      padding: var(--n-space-xs) var(--n-space-m);
      border: 1px solid var(--n-color-border);
      border-radius: var(--n-border-radius);
      font-family: inherit;
      font-size: var(--n-font-size-m);
      line-height: var(--n-line-height-form);
      color: var(--n-color-text);
      background: white;
      transition: all var(--n-transition-slowly);
    }

    /* Size variations */
    :host([size="s"]) input {
      padding: calc(var(--n-space-xs) / 2) var(--n-space-s);
      font-size: var(--n-font-size-s);
    }

    :host([size="l"]) input {
      padding: var(--n-space-s) var(--n-space-m);
      font-size: var(--n-font-size-l);
    }

    /* States */
    input:hover:not(:disabled) {
      border-color: var(--n-color-border-hover);
    }

    input:focus {
      outline: none;
      border-color: var(--n-color-accent);
      box-shadow: var(--n-box-shadow);
    }

    :host([error]) input {
      border-color: var(--n-color-status-danger);
    }

    :host([readonly]) input {
      background-color: var(--n-color-surface-lowered);
      cursor: default;
    }

    :host([disabled]) input {
      cursor: not-allowed;
      background: var(--n-color-surface-lowered);
      border-color: var(--n-color-text-weakest);
      color: var(--n-color-text-weakest);
    }

    input::placeholder {
      color: var(--n-color-text-weak);
    }

    .required {
      color: var(--n-color-status-danger);
      margin-left: var(--n-space-xs);
    }

    .helper-text {
      font-size: var(--n-font-size-s);
      line-height: var(--n-line-height-caption);
      color: var(--n-color-text-weak);
    }

    :host([error]) .helper-text {
      color: var(--n-color-status-danger);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    ::slotted([slot="start"]) {
      margin-right: var(--n-space-xs);
    }

    ::slotted([slot="end"]) {
      margin-left: var(--n-space-xs);
    }
  `;
__decorate([
    query("input")
], WattInput.prototype, "input", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "type", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "label", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "value", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "name", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattInput.prototype, "expand", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "disallowPattern", void 0);
__decorate([
    property({ type: Boolean })
], WattInput.prototype, "hideLabel", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "hint", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "error", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattInput.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], WattInput.prototype, "hideRequired", void 0);
__decorate([
    property({ type: String })
], WattInput.prototype, "autocomplete", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattInput.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattInput.prototype, "disabled", void 0);
WattInput = __decorate([
    customElement("watt-input")
], WattInput);
export { WattInput };
//# sourceMappingURL=index.js.map