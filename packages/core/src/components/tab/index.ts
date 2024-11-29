import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-tab")
export class WattTab extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      position: relative;
      font-family: var(--w-font-family);
      font-size: var(--w-font-size-m);
      font-weight: var(--w-tab-font-weight, var(--w-font-weight));
      color: var(--w-tab-color, var(--w-color-text-weak));
      cursor: pointer;
      padding: var(--w-space-s) var(--w-space-m);
      transition: color var(--w-transition-slowly);
      user-select: none;
    }

    :host::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--w-space-m);
      right: var(--w-space-m);
      height: 2px;
      background: var(--w-color-accent);
      transform: scaleX(0);
      transition: transform var(--w-transition-slowly);
    }

    :host(:hover) {
      color: var(--w-color-text);
    }

    :host([selected]) {
      color: var(--w-color-text);
      font-weight: var(--w-font-weight-active);
    }

    :host([selected])::after {
      transform: scaleX(1);
    }

    /* Touch device support */
    @media (pointer: coarse) {
      :host {
        padding: var(--w-space-m);
      }
    }
  `;

  @property({ type: Boolean, reflect: true })
  selected = false;

  private handleClick() {
    if (!this.selected) {
      const event = new CustomEvent("watt-tab-select", {
        detail: { tab: this },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }

  override render() {
    return html`
      <div @click=${this.handleClick}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-tab": WattTab;
  }
}
