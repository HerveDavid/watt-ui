var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let WattBanner = class WattBanner extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = "info";
    }
    render() {
        return html ` <slot></slot> `;
    }
};
WattBanner.styles = css `
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
__decorate([
    property({ type: String, reflect: true })
], WattBanner.prototype, "variant", void 0);
WattBanner = __decorate([
    customElement("watt-banner")
], WattBanner);
export { WattBanner };
//# sourceMappingURL=index.js.map