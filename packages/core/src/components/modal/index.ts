import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

const SIZES = {
  s: '400px',
  m: '600px', 
  l: '800px',
  xl: '1000px'
} as const;

@customElement('watt-modal')
export class WattModal extends LitElement {
  static override styles = css`
    :host {
      display: none;
      font-family: var(--w-font-family);
    }

    :host([open]) {
      display: block;
    }

    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--w-color-overlay);
      z-index: var(--w-index-modal);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--w-space-m);
    }

    .modal {
      background: var(--w-color-surface);
      border-radius: var(--w-border-radius);
      box-shadow: var(--w-box-shadow-modal);
      max-width: 100%;
      width: var(--modal-width);
      margin: auto;
      display: flex;
      flex-direction: column;
      position: relative;
      max-height: calc(100vh - var(--w-space-xl));
    }

    .modal-header {
      padding: var(--w-space-m);
      border-bottom: 1px solid var(--w-color-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .modal-close {
      background: none;
      border: none;
      padding: var(--w-space-xs);
      cursor: pointer;
      color: var(--w-color-text);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--w-border-radius);
      transition: background var(--w-transition-slowly);
    }

    .modal-close:hover {
      background: var(--w-color-surface-lowered);
    }

    .modal-body {
      padding: var(--w-space-m);
      overflow: auto;
      flex: 1;
    }

    :host(:not([scrollable])) .modal-body {
      overflow: visible;
    }
    
    :host(:not([scrollable])) .modal {
      overflow: auto;
    }

    .modal-footer {
      padding: var(--w-space-m);
      border-top: 1px solid var(--w-color-border);
      display: flex;
      justify-content: flex-end;
      gap: var(--w-space-s);
    }

    /* Initial animation states */
    .modal-backdrop {
      opacity: 0;
      transition: opacity var(--w-transition-slowly);
    }

    .modal {
      transform: translateY(20px);
      opacity: 0;
      transition: transform var(--w-transition-slowly),
                  opacity var(--w-transition-slowly);
    }

    /* Animation end states */
    :host([open]) .modal-backdrop {
      opacity: 1;
    }

    :host([open]) .modal {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String, reflect: true })
  size: keyof typeof SIZES = 'm';

  @property({ type: String })
  returnValue = '';

  @property({ type: Boolean, reflect: true })
  scrollable = false;

  @query('.modal')
  private modalElement!: HTMLElement;

  @query('.modal-backdrop') 
  private backdropElement!: HTMLElement;

  override firstUpdated() {
    this.style.setProperty('--modal-width', SIZES[this.size]);
  }

  private close(returnValue?: string) {
    const canClose = this.dispatchEvent(new CustomEvent('cancel', {
      cancelable: true
    }));

    if (canClose) {
      if (returnValue !== undefined) {
        this.returnValue = returnValue;
      }
      
      this.open = false;
      this.dispatchEvent(new CustomEvent('close'));
    }
  }

  private handleBackdropClick(e: MouseEvent) {
    if (e.target === this.backdropElement) {
      this.close();
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  protected override updated(changedProps: Map<string, unknown>) {
    if (changedProps.has('open')) {
      if (this.open) {
        // Focus management when opening
        requestAnimationFrame(() => {
          const autoFocusTarget = this.modalElement.querySelector('[autofocus]') as HTMLElement;
          if (autoFocusTarget) {
            autoFocusTarget.focus();
          } else {
            const firstFocusable = this.modalElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
            if (firstFocusable) {
              firstFocusable.focus();
            }
          }
        });

        // Add event listeners
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
      } else {
        // Remove event listeners
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
      }
    }
  }

  override render() {
    return html`
      <div 
        class="modal-backdrop"
        @click=${this.handleBackdropClick}
      >
        <div 
          class="modal"
          role="dialog" 
          aria-modal="true"
        >
          <header class="modal-header">
            <slot name="header"></slot>
            <button 
              class="modal-close"
              @click=${() => this.close()}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </header>
          
          <div class="modal-body">
            <slot></slot>
          </div>

          <footer class="modal-footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-modal': WattModal;
  }
}