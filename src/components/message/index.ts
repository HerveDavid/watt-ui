import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-message")
export class WattMessage extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--n-font-family);
      padding: var(--n-space-s) var(--n-space-m);
      border-bottom: 1px solid var(--n-color-border);
    }

    :host([unread]) {
      background-color: var(--n-color-surface-raised);
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
  `;

  @property({ type: Boolean, reflect: true })
  unread = false;

  render() {
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
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-message": WattMessage;
  }
}