import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-button")
export class WattButton extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      font-family: var(--w-font-family);
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--w-space-s);
      padding: var(--w-space-xs) var(--w-space-m);
      border-radius: var(--w-border-radius);
      border: 1px solid;
      font-size: var(--w-font-size-m);
      line-height: var(--w-line-height-form);
      cursor: pointer;
      transition: all var(--w-transition-slowly);
      background: white;
    }

    /* Default */
    :host([variant="default"]) button {
      border-color: var(--w-color-border);
      background: white;
      color: var(--w-color-text);
    }

    :host([variant="default"]) button:hover {
      border-color: var(--w-color-accent);
      color: var(--w-color-accent);
    }

    /* Primary */
    :host([variant="primary"]) button {
      background: var(--w-color-accent);
      border-color: var(--w-color-accent);
      color: var(--w-color-text-on-accent);
    }

    :host([variant="primary"]) button:hover {
      background: var(--w-color-accent-secondary);
      border-color: var(--w-color-accent-secondary);
    }

    /* Danger */
    :host([variant="danger"]) button {
      background: var(--w-color-status-danger);
      border-color: var(--w-color-border-danger);
      color: var(--w-color-text-on-accent);
    }

    :host([variant="danger"]) button:hover {
      background: var(--w-color-status-danger-weak);
      border-color: var(--w-color-status-danger-weak);
    }

    /* Plain */
    :host([variant="plain"]) button {
      background: transparent;
      border-color: transparent;
      color: var(--w-color-text);
      padding: var(--w-space-xs) 0;
    }

    :host([variant="plain"]) button:hover {
      color: var(--w-color-accent);
    }

    /* Disabled */
    :host([disabled]) button,
    button:disabled {
      cursor: not-allowed;
      border-color: var(--w-color-text-weakest);
      color: var(--w-color-text-weakest);
      background: var(--w-color-surface-lowered);
    }

    /* Filter/Dashed */
    :host([variant="dashed"]) button {
      border-style: dashed;
      background: white;
      color: var(--w-color-text);
    }

    :host([variant="dashed"]) button:hover {
      border-color: var(--w-color-accent);
      color: var(--w-color-accent);
    }

    /* Focus state */
    button:focus {
      outline: none;
      box-shadow: var(--w-box-shadow);
    }

    /* Loading spinner */
    .loading-spinner {
      width: var(--w-size-icon-s);
      height: var(--w-size-icon-s);
      border: 2px solid currentColor;
      border-bottom-color: transparent;
      border-radius: var(--w-border-radius-circle);
      display: inline-block;
      animation: spin var(--w-transition-slowly) linear infinite;
      margin-right: var(--w-space-s);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Touch device support */
    @media (pointer: coarse) {
      button {
        min-height: calc(var(--w-size-icon-l) * 2);
        min-width: calc(var(--w-size-icon-l) * 2);
      }
    }
  `;

  @property({ type: String, reflect: true })
  variant: "default" | "primary" | "danger" | "dashed" | "plain" = "default";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: Boolean, reflect: true })
  square = false;

  private handleClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      return;
    }

    const event = new CustomEvent("watt-click", {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  override render() {
    return html`
      <button
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.loading 
          ? html`<span class="loading-spinner" aria-hidden="true"></span>` 
          : ""}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-button": WattButton;
  }
}