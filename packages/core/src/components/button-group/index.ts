import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("watt-button-group")
export class WattButtonGroup extends LitElement {
  static override styles = css`
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

  override render() {
    return html`<slot></slot>`;
  }
}

@customElement("watt-dropdown")
export class WattDropdown extends LitElement {
  static override styles = css`
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

  @property({ type: String })
  size: "s" | "m" | "l" = "m";

  @property({ type: String })
  align: "start" | "end" = "end";

  @state()
  private _open = false;

  constructor() {
    super();
    this._handleClickOutside = this._handleClickOutside.bind(this);
  }

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this._handleClickOutside);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleClickOutside);
  }

  private _handleClickOutside(e: MouseEvent) {
    if (!this.contains(e.target as Node)) {
      this._open = false;
    }
  }

  private _handleToggle() {
    this._open = !this._open;
  }

  override render() {
    return html`
      <div @click=${this._handleToggle}>
        <slot name="toggle"></slot>
      </div>
      <div class="content" ?data-open=${this._open} role="menu">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("watt-dropdown-item")
export class WattDropdownItem extends LitElement {
  static override styles = css`
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

  override render() {
    return html`
      <button role="menuitem">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-button-group": WattButtonGroup;
    "watt-dropdown": WattDropdown;
    "watt-dropdown-item": WattDropdownItem;
  }
}
