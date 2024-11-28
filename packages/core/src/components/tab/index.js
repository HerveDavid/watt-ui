var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let WattTab = class WattTab extends LitElement {
    constructor() {
        super(...arguments);
        this.selected = false;
    }
    handleClick() {
        if (!this.selected) {
            const event = new CustomEvent("watt-tab-select", {
                detail: { tab: this },
                bubbles: true,
                composed: true,
            });
            this.dispatchEvent(event);
        }
    }
    render() {
        return html `
      <div @click=${this.handleClick}>
        <slot></slot>
      </div>
    `;
    }
};
WattTab.styles = css `
    :host {
      display: inline-flex;
      position: relative;
      font-family: var(--n-font-family);
      font-size: var(--n-font-size-m);
      font-weight: var(--n-tab-font-weight, var(--n-font-weight));
      color: var(--n-tab-color, var(--n-color-text-weak));
      cursor: pointer;
      padding: var(--n-space-s) var(--n-space-m);
      transition: color var(--n-transition-slowly);
      user-select: none;
    }

    :host::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--n-space-m);
      right: var(--n-space-m);
      height: 2px;
      background: var(--n-color-accent);
      transform: scaleX(0);
      transition: transform var(--n-transition-slowly);
    }

    :host(:hover) {
      color: var(--n-color-text);
    }

    :host([selected]) {
      color: var(--n-color-text);
      font-weight: var(--n-font-weight-active);
    }

    :host([selected])::after {
      transform: scaleX(1);
    }

    /* Touch device support */
    @media (pointer: coarse) {
      :host {
        padding: var(--n-space-m);
      }
    }
  `;
__decorate([
    property({ type: Boolean, reflect: true })
], WattTab.prototype, "selected", void 0);
WattTab = __decorate([
    customElement("watt-tab")
], WattTab);
export { WattTab };
//# sourceMappingURL=index.js.map