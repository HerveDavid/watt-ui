import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type BadgeVariant = 'warning' | 'success' | 'danger' | 'highlight' | 'neutral' | 'info';

@customElement('watt-badge')
export class WattBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--n-space-xs) var(--n-space-s);
      border-radius: var(--n-border-radius-pill);
      font-family: var(--n-font-family);
      font-size: var(--n-font-size-s);
      line-height: var(--n-line-height-caption);
      font-weight: var(--n-font-weight);
      white-space: nowrap;
      user-select: none;
    }

    /* Default/Neutral style */
    :host {
      background-color: var(--n-color-status-neutral-weak);
      color: var(--n-color-text-neutral);
    }

    /* Strong neutral variant */
    :host([strong]) {
      background-color: var(--n-color-status-neutral);
      color: var(--n-color-text-neutral-strong);
    }

    /* Warning variant */
    :host([variant="warning"]) {
      background-color: var(--n-color-status-warning-weak);
      color: var(--n-color-text-warning-strong);
    }

    :host([variant="warning"][strong]) {
      background-color: var(--n-color-status-warning);
      color: var(--n-color-text-warning-strong);
    }

    /* Success variant */
    :host([variant="success"]) {
      background-color: var(--n-color-status-success-weak);
      color: var(--n-color-text-success);
    }

    :host([variant="success"][strong]) {
      background-color: var(--n-color-status-success);
      color: var(--n-color-text-success);
    }

    /* Danger variant */
    :host([variant="danger"]) {
      background-color: var(--n-color-status-danger-weak);
      color: var(--n-color-text-danger);
    }

    :host([variant="danger"][strong]) {
      background-color: var(--n-color-status-danger);
      color: var(--n-color-text-on-accent);
    }

    /* Highlight variant */
    :host([variant="highlight"]) {
      background-color: var(--n-color-status-highlight-weak);
      color: var(--n-color-text-highlight);
    }

    :host([variant="highlight"][strong]) {
      background-color: var(--n-color-status-highlight);
      color: var(--n-color-text-on-accent);
    }

    /* Info variant */
    :host([variant="info"]) {
      background-color: var(--n-color-status-info-weak);
      color: var(--n-color-text-info);
    }

    :host([variant="info"][strong]) {
      background-color: var(--n-color-status-info);
      color: var(--n-color-text-on-accent);
    }
  `;

  @property({ type: String, reflect: true })
  variant?: BadgeVariant = 'neutral';

  @property({ type: Boolean, reflect: true })
  strong = false;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-badge': WattBadge;
  }
}