import { LitElement, html, css, PropertyValues } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

// Alarm Priority type
export type AlarmPriority = 0 | 1 | 2 | 3 | 4;

/**
 * Alarm component following ISA-101 specifications
 */
@customElement('watt-alarm')
export class WattAlarm extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .alarm {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--w-font-family);
      width: var(--alarm-size, 48px); 
      height: var(--alarm-size, 48px);
      margin-bottom: 4px;
    }

    /* Shapes */
    .square {
      border: 2px solid var(--w-color-border, rgb(0, 0, 0));
    }

    .circle {
      border: 2px solid var(--w-color-border, rgb(0, 0, 0));
      border-radius: 50%;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 24px solid transparent;
      border-right: 24px solid transparent;
      border-bottom: 42px solid currentColor;
    }

    .diamond {
      width: 34px;
      height: 34px;
      transform: rotate(45deg);
      border: 2px solid var(--w-color-border, rgb(0, 0, 0));
    }

    /* Priority colors from ISA-101 */
    .priority-1 {
      color: var(--w-color-status-danger, rgb(226, 32, 40));
      background-color: var(--w-color-status-danger, rgb(226, 32, 40));
    }

    .priority-2 {
      color: var(--w-color-status-warning, rgb(245, 225, 27));
      background-color: var(--w-color-status-warning, rgb(245, 225, 27));
    }

    .priority-3 {
      color: rgb(236, 134, 41);
      background-color: rgb(236, 134, 41);
    }

    .priority-4 {
      color: var(--w-color-status-highlight, rgb(145, 106, 173));
      background-color: var(--w-color-status-highlight, rgb(145, 106, 173));
    }

    .priority-0 {
      color: var(--w-color-status-info, rgb(71, 92, 167));
      background-color: var(--w-color-status-info, rgb(71, 92, 167));
    }

    /* Suppressed state */
    .suppressed {
      background-color: white !important;
    }

    /* Priority text */
    .priority-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: black;
      font-size: 18px;
      font-weight: var(--w-font-weight-strong, 600);
      z-index: 1;
    }

    /* Value display */
    .value {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--w-color-text, rgb(63, 63, 63));
      font-size: var(--w-font-size-s, 0.75rem);
      line-height: 1.2;
    }

    .value-unit {
      color: var(--w-color-text-weak, rgb(145, 145, 145));
      font-size: var(--w-font-size-xs, 0.6875rem));
    }

    /* Animation */
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0.2; }
      100% { opacity: 1; }
    }

    .blinking {
      animation: blink 1s ease-in-out infinite;
    }
  `;

  @property({ type: Number })
  priority: AlarmPriority = 1;

  @property({ type: Number })
  value?: number = undefined;

  @property({ type: String })
  unit?: string = undefined;

  @property({ type: Boolean })
  suppressed = false;

  @property({ type: Boolean })
  blinking = false;

  @state()
  private shape = '';

  override willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('priority')) {
      this.updateShape();
    }
  }

  private updateShape(): void {
    switch(this.priority) {
      case 1:
        this.shape = 'square';
        break;
      case 2:
        this.shape = 'triangle';
        break;
      case 3:
        this.shape = 'circle';
        break;
      case 4:
        this.shape = 'triangle';
        break;
      case 0:
        this.shape = 'diamond';
        break;
      default:
        this.shape = 'square';
    }
  }

  override render() {
    const classes = {
      'alarm': true,
      [this.shape]: true,
      [`priority-${this.priority}`]: true,
      'suppressed': this.suppressed,
      'blinking': this.blinking
    };

    return html`
      <div class=${Object.entries(classes)
        .filter(([_, value]) => value)
        .map(([key]) => key)
        .join(' ')}>
        <span class="priority-text">${this.priority}</span>
      </div>
      ${this.value !== undefined ? html`
        <div class="value">
          ${this.value}
          ${this.unit ? html`
            <span class="value-unit">${this.unit}</span>
          ` : null}
        </div>
      ` : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-alarm': WattAlarm;
  }
}