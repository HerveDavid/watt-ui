import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("watt-input")
export class WattInput extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: var(--w-font-family);
    }

    :host([expand]) {
      width: 100%;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: var(--w-space-xs);
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
    }

    label {
      color: var(--w-color-text);
      font-size: var(--w-font-size-s);
      font-weight: var(--w-font-weight);
      line-height: var(--w-line-height-caption);
    }

    input {
      width: 100%;
      padding: var(--w-space-xs) var(--w-space-m);
      border: 1px solid var(--w-color-border);
      border-radius: var(--w-border-radius);
      font-family: inherit;
      font-size: var(--w-font-size-m);
      line-height: var(--w-line-height-form);
      color: var(--w-color-text);
      background: white;
      transition: all var(--w-transition-slowly);
    }

    /* Size variations */
    :host([size="s"]) input {
      padding: calc(var(--w-space-xs) / 2) var(--w-space-s);
      font-size: var(--w-font-size-s);
    }

    :host([size="l"]) input {
      padding: var(--w-space-s) var(--w-space-m);
      font-size: var(--w-font-size-l);
    }

    /* States */
    input:hover:not(:disabled) {
      border-color: var(--w-color-border-hover);
    }

    input:focus {
      outline: none;
      border-color: var(--w-color-accent);
      box-shadow: var(--w-box-shadow);
    }

    :host([error]) input {
      border-color: var(--w-color-status-danger);
    }

    :host([readonly]) input {
      background-color: var(--w-color-surface-lowered);
      cursor: default;
    }

    :host([disabled]) input {
      cursor: not-allowed;
      background: var(--w-color-surface-lowered);
      border-color: var(--w-color-text-weakest);
      color: var(--w-color-text-weakest);
    }

    input::placeholder {
      color: var(--w-color-text-weak);
    }

    .required {
      color: var(--w-color-status-danger);
      margin-left: var(--w-space-xs);
    }

    .helper-text {
      font-size: var(--w-font-size-s);
      line-height: var(--w-line-height-caption);
      color: var(--w-color-text-weak);
    }

    :host([error]) .helper-text {
      color: var(--w-color-status-danger);
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
      margin-right: var(--w-space-xs);
    }

    ::slotted([slot="end"]) {
      margin-left: var(--w-space-xs);
    }
  `;

  @query("input")
  private input!: HTMLInputElement;

  @property({ type: String })
  type:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "search"
    | "number"
    | "unit"
    | "button" = "text";

  @property({ type: String })
  label = "";

  @property({ type: String })
  value = "";

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  size: "s" | "m" | "l" = "m";

  @property({ type: Boolean, reflect: true })
  expand = false;

  @property({ type: String })
  disallowPattern?: string;

  @property({ type: Boolean })
  hideLabel = false;

  @property({ type: String })
  hint?: string;

  @property({ type: String })
  error?: string;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean })
  hideRequired = false;

  @property({ type: String })
  autocomplete: string = "off";

  @property({ type: Boolean, reflect: true })
  readonly = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  select() {
    this.input?.select();
  }

  setSelectionRange(
    start: number,
    end: number,
    direction?: "forward" | "backward" | "none"
  ) {
    this.input?.setSelectionRange(start, end, direction);
  }

  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectMode?: "select" | "start" | "end" | "preserve"
  ) {
    if (this.input) {
      // Si start/end ne sont pas fournis, utilise la sélection actuelle
      const selStart =
        start !== undefined ? start : this.input.selectionStart || 0;
      const selEnd = end !== undefined ? end : this.input.selectionEnd || 0;

      this.input.setRangeText(
        replacement,
        selStart,
        selEnd,
        selectMode || "preserve"
      );
    }
  }

  getNativeElement(): HTMLInputElement {
    return this.input;
  }

  override focus(options?: FocusOptions) {
    this.input?.focus(options);
  }

  override blur() {
    this.input?.blur();
  }

  override click() {
    this.input?.click();
  }

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent("watt-input", {
        detail: {
          value: this.value,
          originalEvent: e,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent("watt-change", {
        detail: {
          value: this.value,
          originalEvent: e,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  override render() {
    return html`
      <div class="input-container">
        ${this.label
          ? html`
              <label
                for="input-${this.name}"
                class="${this.hideLabel ? "visually-hidden" : ""}"
              >
                ${this.label}
                ${this.required && !this.hideRequired
                  ? html`<span class="required">*</span>`
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
            @select=${(e: Event) =>
              this.dispatchEvent(
                new CustomEvent("select", {
                  detail: { originalEvent: e },
                  bubbles: true,
                  composed: true,
                })
              )}
          />
          <slot name="end"></slot>
        </div>

        ${this.hint || this.error
          ? html` <div class="helper-text">${this.error || this.hint}</div> `
          : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-input": WattInput;
  }
}
