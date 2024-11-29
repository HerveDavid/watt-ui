import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-banner")
export class WattBanner extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: var(--w-font-family);
      font-size: var(--w-font-size-m);
      line-height: var(--w-line-height);
      padding: var(--w-space-m);
      margin-bottom: var(--w-space-m);
      border-radius: var(--w-banner-border-radius, var(--w-border-radius));
      box-shadow: var(--w-banner-box-shadow, var(--w-box-shadow-card));
    }

    :host([variant="info"]) {
      background-color: var(--w-color-surface);
      border-left: 4px solid var(--w-color-status-info);
      color: var(--w-color-text);
    }

    :host([variant="danger"]) {
      background-color: var(--w-color-status-danger-weak);
      border-left: 4px solid var(--w-color-status-danger);
      color: var(--w-color-text-on-accent);
    }

    :host([variant="warning"]) {
      background-color: var(--w-color-surface);
      border-left: 4px solid var(--w-color-status-warning);
      color: var(--w-color-text);
    }

    :host([variant="success"]) {
      background-color: var(--w-color-surface);
      border-left: 4px solid var(--w-color-status-success);
      color: var(--w-color-text);
    }

    /* Styling for links inside the banner */
    ::slotted(a) {
      color: var(--w-color-text-link);
      text-decoration: none;
      font-weight: var(--w-font-weight-active);
      transition: color var(--w-transition-quickly);
    }

    ::slotted(a:hover) {
      color: var(--w-color-accent-secondary);
      text-decoration: underline;
    }
  `;

  @property({ type: String, reflect: true })
  variant: "info" | "danger" | "warning" | "success" = "info";

  override render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-banner": WattBanner;
  }
}
