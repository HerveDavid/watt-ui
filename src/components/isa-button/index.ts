import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './style.css?inline';

/**
 * ISA 101 compliant button using Tailwind CSS
 */
@customElement('isa-button')
export class IsaButton extends LitElement {
  @property({ type: Boolean, reflect: true }) 
  disabled = false;

  static styles = unsafeCSS(styles);

  render() {
    return html`
      <button
        class=${`
          h-10 
          min-w-[80px] 
          px-4 
          flex 
          items-center 
          justify-center 
          rounded 
          font-arial 
          text-sm
          mx-1
          transition-colors
          ${this.disabled 
            ? 'bg-isa-gray-224 border-isa-gray-192 text-isa-gray-91 cursor-not-allowed' 
            : 'bg-isa-button-default border-isa-button-border text-isa-gray-63 cursor-pointer hover:bg-isa-button-hover active:bg-isa-button-active'
          }
          border
          focus:outline-none 
          focus-visible:ring-2 
          focus-visible:ring-isa-gray-160 
          focus-visible:ring-offset-1
        `}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }

    this.dispatchEvent(new CustomEvent('isa-click', {
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'isa-button': IsaButton;
  }
}