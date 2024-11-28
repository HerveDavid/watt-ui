var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let WattStack = class WattStack extends LitElement {
    constructor() {
        super(...arguments);
        this.gap = 'm';
        this.direction = 'vertical';
        this.alignItems = 'stretch';
        this.wrap = false;
        this.justifyContent = undefined;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Update flex properties when attributes change
        if (this.alignItems) {
            this.style.alignItems = this.alignItems;
        }
        if (this.justifyContent) {
            this.style.justifyContent = this.justifyContent;
        }
    }
    render() {
        return html `
      <slot></slot>
    `;
    }
};
WattStack.styles = css `
    :host {
      display: flex;
      box-sizing: border-box;
    }

    :host([direction='vertical']) {
      flex-direction: column;
    }

    :host([direction='horizontal']) {
      flex-direction: row;
    }

    :host([wrap]) {
      flex-wrap: wrap;
    }

    /* Gap mappings */
    :host([gap='none']) {
      --n-stack-gap: 0;
    }

    :host([gap='xs']) {
      --n-stack-gap: var(--n-space-xs);
    }

    :host([gap='s']) {
      --n-stack-gap: var(--n-space-s);
    }

    :host([gap='m']) {
      --n-stack-gap: var(--n-space-m);
    }

    :host([gap='l']) {
      --n-stack-gap: var(--n-space-l);
    }

    :host([gap='xl']) {
      --n-stack-gap: var(--n-space-xl);
    }

    :host([gap='xxl']) {
      --n-stack-gap: var(--n-space-xxl);
    }

    /* Apply gap based on direction */
    :host([direction='vertical']) {
      row-gap: var(--n-stack-gap);
    }

    :host([direction='horizontal']) {
      column-gap: var(--n-stack-gap);
    }
  `;
__decorate([
    property({ type: String, reflect: true })
], WattStack.prototype, "gap", void 0);
__decorate([
    property({ type: String, reflect: true })
], WattStack.prototype, "direction", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'align-items' })
], WattStack.prototype, "alignItems", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], WattStack.prototype, "wrap", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'justify-content' })
], WattStack.prototype, "justifyContent", void 0);
WattStack = __decorate([
    customElement('watt-stack')
], WattStack);
export { WattStack };
//# sourceMappingURL=index.js.map