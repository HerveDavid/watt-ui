var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let WattBreadcrumb = class WattBreadcrumb extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
WattBreadcrumb.styles = css `
    :host {
      display: flex;
      align-items: center;
      font-family: var(--n-font-family);
      font-size: var(--n-font-size-m);
      color: var(--n-color-text);
    }

    ::slotted(watt-breadcrumb-item:not(:last-child))::after {
      content: "/";
      margin: 0 var(--n-space-xs);
      color: var(--n-color-text-weak);
    }
  `;
WattBreadcrumb = __decorate([
    customElement('watt-breadcrumb')
], WattBreadcrumb);
export { WattBreadcrumb };
let WattBreadcrumbItem = class WattBreadcrumbItem extends LitElement {
    render() {
        return html `<a><slot></slot></a>`;
    }
};
WattBreadcrumbItem.styles = css `
    :host {
      display: inline-flex;
      align-items: center;
    }

    :host(:last-child) a {
      color: var(--n-color-text);
      cursor: default;
      pointer-events: none;
    }

    a {
      color: var(--n-color-text-link);
      text-decoration: none;
      transition: color var(--n-transition-quickly);
    }

    a:hover {
      color: var(--n-color-accent);
      text-decoration: underline;
    }
  `;
WattBreadcrumbItem = __decorate([
    customElement('watt-breadcrumb-item')
], WattBreadcrumbItem);
export { WattBreadcrumbItem };
//# sourceMappingURL=index.js.map