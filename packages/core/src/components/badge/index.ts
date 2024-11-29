import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type BadgeVariant = 'warning' | 'success' | 'danger' | 'highlight' | 'neutral' | 'info';

@customElement('watt-badge')
export class WattBadge extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--w-space-xs) var(--w-space-s);
      border-radius: var(--w-border-radius-pill);
      font-family: var(--w-font-family);
      font-size: var(--w-font-size-s);
      line-height: var(--w-line-height-caption);
      font-weight: var(--w-font-weight);
      white-space: nowrap;
      user-select: none;
    }

    /* Default/Neutral style */
    :host {
      background-color: var(--w-color-status-neutral-weak);
      color: var(--w-color-text-neutral);
    }

    /* Strong neutral variant */
    :host([strong]) {
      background-color: var(--w-color-status-neutral);
      color: var(--w-color-text-neutral-strong);
    }

    /* Warning variant */
    :host([variant="warning"]) {
      background-color: var(--w-color-status-warning-weak);
      color: var(--w-color-text-warning-strong);
    }

    :host([variant="warning"][strong]) {
      background-color: var(--w-color-status-warning);
      color: var(--w-color-text-warning-strong);
    }

    /* Success variant */
    :host([variant="success"]) {
      background-color: var(--w-color-status-success-weak);
      color: var(--w-color-text-success);
    }

    :host([variant="success"][strong]) {
      background-color: var(--w-color-status-success);
      color: var(--w-color-text-success);
    }

    /* Danger variant */
    :host([variant="danger"]) {
      background-color: var(--w-color-status-danger-weak);
      color: var(--w-color-text-danger);
    }

    :host([variant="danger"][strong]) {
      background-color: var(--w-color-status-danger);
      color: var(--w-color-text-on-accent);
    }

    /* Highlight variant */
    :host([variant="highlight"]) {
      background-color: var(--w-color-status-highlight-weak);
      color: var(--w-color-text-highlight);
    }

    :host([variant="highlight"][strong]) {
      background-color: var(--w-color-status-highlight);
      color: var(--w-color-text-on-accent);
    }

    /* Info variant */
    :host([variant="info"]) {
      background-color: var(--w-color-status-info-weak);
      color: var(--w-color-text-info);
    }

    :host([variant="info"][strong]) {
      background-color: var(--w-color-status-info);
      color: var(--w-color-text-on-accent);
    }
  `;

  @property({ type: String, reflect: true })
  variant?: BadgeVariant = 'neutral';

  @property({ type: Boolean, reflect: true })
  strong = false;

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-badge': WattBadge;
  }
}