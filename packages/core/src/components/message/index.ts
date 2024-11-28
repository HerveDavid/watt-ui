import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-message")
export class WattMessage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: var(--n-font-family);
      padding: var(--n-space-s) var(--n-space-m);
      border-bottom: 1px solid var(--n-color-border);
      text-decoration: none;
      color: inherit;
    }

    :host([unread]) {
      background-color: var(--n-color-surface-raised);
    }

    :host([highlight]) {
      animation: highlight 30s ease-out forwards;
    }

    @keyframes highlight {
      0% {
        background-color: var(--n-color-surface-raised);
      }
      100% {
        background-color: transparent;
      }
    }

    .message-content {
      display: flex;
      align-items: baseline;
      gap: var(--n-space-xs);
      color: var(--n-color-text);
      font-size: var(--n-font-size-m);
      line-height: var(--n-line-height);
    }

    .message-dot {
      width: 6px;
      height: 6px;
      background: var(--n-color-accent);
      border-radius: var(--n-border-radius-circle);
      margin-top: 8px;
      flex-shrink: 0;
      display: none;
    }

    :host([unread]) .message-dot {
      display: block;
    }

    ::slotted([slot="footer"]) {
      display: block;
      margin-top: var(--n-space-xs);
      margin-left: calc(6px + var(--n-space-xs));
      color: var(--n-color-text-weak);
      font-size: var(--n-font-size-s);
    }

    :host(:hover) {
      background: var(--n-color-surface-raised);
    }

    .person-name {
      color: var(--n-color-text-link);
      text-decoration: none;
    }

    .person-name:hover {
      text-decoration: underline;
    }

    .pet-name {
      color: var(--n-color-text-link);
      text-decoration: none;
    }

    .pet-name:hover {
      text-decoration: underline;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--n-color-accent);
      outline-offset: -2px;
    }
  `;

  @property({ type: String, reflect: true })
  href?: string;

  @property({ type: Boolean, reflect: true })
  highlight = false;

  @property({ type: Boolean, reflect: true })
  unread = false;

  override focus(options?: FocusOptions): void {
    const target = this.href ? this.renderRoot.querySelector('a') : this;
    target?.focus(options);
  }

  override blur(): void {
    const target = this.href ? this.renderRoot.querySelector('a') : this;
    target?.blur();
  }

  override click(): void {
    const target = this.href ? this.renderRoot.querySelector('a') : this;
    target?.click();
  }

  private renderContent() {
    return html`
      <div class="message-content">
        <div class="message-dot"></div>
        <div>
          <slot></slot>
        </div>
      </div>
      <slot name="footer"></slot>
    `;
  }

  override render() {
    // If href is provided, wrap content in an anchor tag
    if (this.href) {
      return html`
        <a href="${this.href}" class="message-link">
          ${this.renderContent()}
        </a>
      `;
    }

    return this.renderContent();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-message": WattMessage;
  }
}