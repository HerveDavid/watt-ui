var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let WattMessage = class WattMessage extends LitElement {
    constructor() {
        super(...arguments);
        this.highlight = false;
        this.unread = false;
    }
    focus(options) {
        const target = this.href ? this.renderRoot.querySelector('a') : this;
        target?.focus(options);
    }
    blur() {
        const target = this.href ? this.renderRoot.querySelector('a') : this;
        target?.blur();
    }
    click() {
        const target = this.href ? this.renderRoot.querySelector('a') : this;
        target?.click();
    }
    renderContent() {
        return html `
      <div class="message-content">
        <div class="message-dot"></div>
        <div>
          <slot></slot>
        </div>
      </div>
      <slot name="footer"></slot>
    `;
    }
    render() {
        // If href is provided, wrap content in an anchor tag
        if (this.href) {
            return html `
        <a href="${this.href}" class="message-link">
          ${this.renderContent()}
        </a>
      `;
        }
        return this.renderContent();
    }
};
WattMessage.styles = css `
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
__decorate([
    property({ type: String, reflect: true })
], WattMessage.prototype, "href", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattMessage.prototype, "highlight", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattMessage.prototype, "unread", void 0);
WattMessage = __decorate([
    customElement("watt-message")
], WattMessage);
export { WattMessage };
//# sourceMappingURL=index.js.map