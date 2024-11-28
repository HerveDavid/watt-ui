var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
let WattButtonGroup = class WattButtonGroup extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
WattButtonGroup.styles = css `
    :host {
      display: inline-flex;
      gap: 1px;
    }

    ::slotted(watt-button:not(:last-child)) {
      --button-border-right-radius: 0;
    }

    ::slotted(watt-button:not(:first-child)) {
      --button-border-left-radius: 0;
    }
  `;
WattButtonGroup = __decorate([
    customElement("watt-button-group")
], WattButtonGroup);
export { WattButtonGroup };
let WattDropdown = class WattDropdown extends LitElement {
    constructor() {
        super();
        this.size = "m";
        this.align = "end";
        this._open = false;
        this._handleClickOutside = this._handleClickOutside.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener("click", this._handleClickOutside);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener("click", this._handleClickOutside);
    }
    _handleClickOutside(e) {
        if (!this.contains(e.target)) {
            this._open = false;
        }
    }
    _handleToggle() {
        this._open = !this._open;
    }
    render() {
        return html `
      <div @click=${this._handleToggle}>
        <slot name="toggle"></slot>
      </div>
      <div class="content" ?data-open=${this._open} role="menu">
        <slot></slot>
      </div>
    `;
    }
};
WattDropdown.styles = css `
    :host {
      display: inline-block;
      position: relative;
    }

    .content {
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: var(--n-space-xs);
      min-width: 200px;
      background: white;
      border-radius: var(--n-border-radius);
      border: 1px solid var(--n-color-border);
      box-shadow: var(--n-box-shadow-popout);
      z-index: var(--n-index-popout);
      display: none;
    }

    .content[data-open] {
      display: block;
    }
  `;
__decorate([
    property({ type: String })
], WattDropdown.prototype, "size", void 0);
__decorate([
    property({ type: String })
], WattDropdown.prototype, "align", void 0);
__decorate([
    state()
], WattDropdown.prototype, "_open", void 0);
WattDropdown = __decorate([
    customElement("watt-dropdown")
], WattDropdown);
export { WattDropdown };
let WattDropdownItem = class WattDropdownItem extends LitElement {
    render() {
        return html `
      <button role="menuitem">
        <slot></slot>
      </button>
    `;
    }
};
WattDropdownItem.styles = css `
    :host {
      display: block;
    }

    button {
      width: 100%;
      padding: var(--n-space-s) var(--n-space-m);
      border: none;
      background: none;
      text-align: left;
      cursor: pointer;
      font-family: inherit;
      color: var(--n-color-text);
      transition: background-color var(--n-transition-quickly);
    }

    button:hover {
      background-color: var(--n-color-surface-lowered);
    }
  `;
WattDropdownItem = __decorate([
    customElement("watt-dropdown-item")
], WattDropdownItem);
export { WattDropdownItem };
//# sourceMappingURL=index.js.map