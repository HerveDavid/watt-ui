import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('watt-breadcrumb')
export class WattBreadcrumb extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      font-family: var(--w-font-family);
      font-size: var(--w-font-size-m);
      color: var(--w-color-text);
    }

    ::slotted(watt-breadcrumb-item:not(:last-child))::after {
      content: "/";
      margin: 0 var(--w-space-xs);
      color: var(--w-color-text-weak);
    }
  `;

  override render() {
    return html`<slot></slot>`;
  }
}

@customElement('watt-breadcrumb-item')
export class WattBreadcrumbItem extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    :host(:last-child) a {
      color: var(--w-color-text);
      cursor: default;
      pointer-events: none;
    }

    a {
      color: var(--w-color-text-link);
      text-decoration: none;
      transition: color var(--w-transition-quickly);
    }

    a:hover {
      color: var(--w-color-accent);
      text-decoration: underline;
    }
  `;

  override render() {
    return html`<a><slot></slot></a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-breadcrumb': WattBreadcrumb;
    'watt-breadcrumb-item': WattBreadcrumbItem;
  }
}