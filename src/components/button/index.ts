import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-button")
export class WattButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--n-font-family);
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--n-space-s);
      padding: var(--n-space-xs) var(--n-space-m);
      border-radius: var(--n-border-radius);
      border: 1px solid;
      font-size: var(--n-font-size-m);
      line-height: var(--n-line-height-form);
      cursor: pointer;
      transition: all var(--n-transition-slowly);
      background: white;
    }

    /* Default */
    :host([variant="default"]) button {
      border-color: var(--n-color-border);
      background: white;
      color: var(--n-color-text);
    }

    :host([variant="default"]) button:hover {
      border-color: var(--n-color-accent);
      color: var(--n-color-accent);
    }

    /* Primary */
    :host([variant="primary"]) button {
      background: var(--n-color-accent);
      border-color: var(--n-color-accent);
      color: var(--n-color-text-on-accent);
    }

    :host([variant="primary"]) button:hover {
      background: var(--n-color-accent-secondary);
      border-color: var(--n-color-accent-secondary);
    }

    /* Danger */
    :host([variant="danger"]) button {
      background: var(--n-color-status-danger);
      border-color: var(--n-color-border-danger);
      color: var(--n-color-text-on-accent);
    }

    :host([variant="danger"]) button:hover {
      background: var(--n-color-status-danger-weak);
      border-color: var(--n-color-status-danger-weak);
    }

    /* Plain */
    :host([variant="plain"]) button {
      background: transparent;
      border-color: transparent;
      color: var(--n-color-text);
      padding: var(--n-space-xs) 0;
    }

    :host([variant="plain"]) button:hover {
      color: var(--n-color-accent);
    }

    /* Disabled */
    :host([disabled]) button,
    button:disabled {
      cursor: not-allowed;
      border-color: var(--n-color-text-weakest);
      color: var(--n-color-text-weakest);
      background: var(--n-color-surface-lowered);
    }

    /* Filter/Dashed */
    :host([variant="dashed"]) button {
      border-style: dashed;
      background: white;
      color: var(--n-color-text);
    }

    :host([variant="dashed"]) button:hover {
      border-color: var(--n-color-accent);
      color: var(--n-color-accent);
    }

    /* Focus state */
    button:focus {
      outline: none;
      box-shadow: var(--n-box-shadow);
    }

    /* Loading spinner */
    .loading-spinner {
      width: var(--n-size-icon-s);
      height: var(--n-size-icon-s);
      border: 2px solid currentColor;
      border-bottom-color: transparent;
      border-radius: var(--n-border-radius-circle);
      display: inline-block;
      animation: spin var(--n-transition-slowly) linear infinite;
      margin-right: var(--n-space-s);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Touch device support */
    @media (pointer: coarse) {
      button {
        min-height: calc(var(--n-size-icon-l) * 2);
        min-width: calc(var(--n-size-icon-l) * 2);
      }
    }
  `;

  @property({ type: String, reflect: true })
  variant: "default" | "primary" | "danger" | "dashed" | "plain" = "default";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

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

  render() {
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