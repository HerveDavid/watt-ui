import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-tab")
export class WattTab extends LitElement {
  static styles = css`
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

  render() {
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
