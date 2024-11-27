import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-banner")
export class WattBanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--n-font-family);
      font-size: var(--n-font-size-m);
      line-height: var(--n-line-height);
      padding: var(--n-space-m);
      margin-bottom: var(--n-space-m);
      border-radius: var(--n-banner-border-radius, var(--n-border-radius));
      box-shadow: var(--n-banner-box-shadow, var(--n-box-shadow-card));
    }

    :host([variant="info"]) {
      background-color: var(--n-color-surface);
      border-left: 4px solid var(--n-color-status-info);
      color: var(--n-color-text);
    }

    :host([variant="danger"]) {
      background-color: var(--n-color-status-danger-weak);
      border-left: 4px solid var(--n-color-status-danger);
      color: var(--n-color-text-on-accent);
    }

    :host([variant="warning"]) {
      background-color: var(--n-color-surface);
      border-left: 4px solid var(--n-color-status-warning);
      color: var(--n-color-text);
    }

    :host([variant="success"]) {
      background-color: var(--n-color-surface);
      border-left: 4px solid var(--n-color-status-success);
      color: var(--n-color-text);
    }

    /* Styling for links inside the banner */
    ::slotted(a) {
      color: var(--n-color-text-link);
      text-decoration: none;
      font-weight: var(--n-font-weight-active);
      transition: color var(--n-transition-quickly);
    }

    ::slotted(a:hover) {
      color: var(--n-color-accent-secondary);
      text-decoration: underline;
    }
  `;

  @property({ type: String, reflect: true })
  variant: "info" | "danger" | "warning" | "success" = "info";

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-banner": WattBanner;
  }
}
