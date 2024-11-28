import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-fieldset")
export class WattFieldset extends LitElement {
  static override styles = css`
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

  @property({ type: String, reflect: true })
  label = "";

  @property({ type: String })
  hint?: string;

  @property({ type: String, reflect: true })
  error?: string;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true, attribute: "hide-required" })
  hideRequired = false;

  @property({ type: Boolean, reflect: true, attribute: "hide-label" })
  hideLabel = false;

  @property({ type: String, reflect: true })
  size: "s" | "m" = "m";

  override render() {
    return html`
      <fieldset aria-required=${this.required} aria-invalid=${!!this.error}>
        <legend>
          <slot name="label">${this.label}</slot>
          ${this.required
            ? html`<span class="required" aria-hidden="true">*</span>`
            : ""}
        </legend>

        <slot></slot>

        ${this.hint || this._hasHintSlot()
          ? html`
              <div class="hint" id="hint">
                <slot name="hint">${this.hint}</slot>
              </div>
            `
          : ""}
        ${this.error || this._hasErrorSlot()
          ? html`
              <div class="error" id="error" role="alert">
                <slot name="error">${this.error}</slot>
              </div>
            `
          : ""}
      </fieldset>
    `;
  }

  private _hasHintSlot() {
    return !!this.querySelector('[slot="hint"]');
  }

  private _hasErrorSlot() {
    return !!this.querySelector('[slot="error"]');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-fieldset": WattFieldset;
  }
}
