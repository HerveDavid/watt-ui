var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WattIcon_1;
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let WattIcon = WattIcon_1 = class WattIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.size = 'm';
    }
    static registerResolver(resolver) {
        WattIcon_1.resolver = resolver;
    }
    static registerIcon(iconOrName, icon) {
        if (typeof iconOrName === 'string') {
            if (icon) {
                WattIcon_1.iconRegistry.set(iconOrName, icon);
            }
        }
        else {
            WattIcon_1.iconRegistry.set(iconOrName.title, iconOrName.default);
        }
    }
    async getIcon() {
        const cachedIcon = WattIcon_1.iconRegistry.get(this.name);
        if (cachedIcon)
            return cachedIcon;
        if (WattIcon_1.resolver) {
            try {
                const resolvedIcon = await WattIcon_1.resolver(this.name);
                WattIcon_1.iconRegistry.set(this.name, resolvedIcon);
                return resolvedIcon;
            }
            catch (error) {
                console.warn(`Failed to load icon: ${this.name}`, error);
            }
        }
        return undefined;
    }
    render() {
        const ariaHidden = this.label ? 'false' : 'true';
        const ariaLabel = this.label || undefined;
        const style = this.color ? `color: ${this.color}` : '';
        return html `
      <slot>
        <svg 
          part="svg"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 48 48"
          aria-hidden=${ariaHidden}
          aria-label=${ariaLabel || nothing}
          role=${this.label ? 'img' : 'presentation'}
          style=${style}
        >
          ${this.name ? this.renderIcon() : nothing}
        </svg>
      </slot>
    `;
    }
    async renderIcon() {
        const icon = await this.getIcon();
        if (!icon) {
            console.warn(`Icon not found: ${this.name}`);
            return nothing;
        }
        const template = document.createElement('template');
        template.innerHTML = icon;
        return template.content;
    }
};
WattIcon.styles = css `
    :host {
      display: inline-block;
      width: var(--n-size-icon-m);
      height: var(--n-size-icon-m);
      color: var(--n-color-icon);
      vertical-align: middle;
    }

    :host([size='xxs']) {
      width: var(--n-size-icon-xxs);
      height: var(--n-size-icon-xxs);
    }

    :host([size='xs']) {
      width: var(--n-size-icon-xs);
      height: var(--n-size-icon-xs);
    }

    :host([size='s']) {
      width: var(--n-size-icon-s);
      height: var(--n-size-icon-s);
    }

    :host([size='l']) {
      width: var(--n-size-icon-l);
      height: var(--n-size-icon-l);
    }

    :host([size='xl']) {
      width: var(--n-size-icon-xl);
      height: var(--n-size-icon-xl);
    }

    :host([size='xxl']) {
      width: var(--n-size-icon-xxl);
      height: var(--n-size-icon-xxl);
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: currentColor;
      transition: var(--n-transition-quickly);
    }

    :host(:hover) {
      color: var(--n-color-icon-hover);
    }
  `;
WattIcon.iconRegistry = new Map();
__decorate([
    property({ type: String, reflect: true })
], WattIcon.prototype, "name", void 0);
__decorate([
    property({ type: String, reflect: true })
], WattIcon.prototype, "size", void 0);
__decorate([
    property({ type: String })
], WattIcon.prototype, "color", void 0);
__decorate([
    property({ type: String })
], WattIcon.prototype, "label", void 0);
WattIcon = WattIcon_1 = __decorate([
    customElement('watt-icon')
], WattIcon);
export { WattIcon };
//# sourceMappingURL=index.js.map