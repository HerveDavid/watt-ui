import { LitElement, html, css, PropertyValues } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

// Alarm Priority type
export type AlarmPriority = 0 | 1 | 2 | 3 | 4;

/**
 * Alarm component following ISA-101 specifications
 * @element watt-alarm
 * 
 * @prop {AlarmPriority} priority - Alarm priority level (0-4)
 * @prop {number} value - Optional value to display
 * @prop {string} unit - Optional unit for the value
 * @prop {boolean} suppressed - Whether the alarm is suppressed
 * @prop {boolean} blinking - Whether the alarm should blink
 */
@customElement('watt-alarm')
export class WattAlarm extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .alarm {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--w-font-family);
      width: var(--alarm-size, 48px); 
      height: var(--alarm-size, 48px);
    }

    /* Shapes */
    .square {
      border: 2px solid currentColor;
    }

    .circle {
      border: 2px solid currentColor;
      border-radius: 50%;
    }

    .triangle {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .diamond {
      transform: rotate(45deg);
    }

    /* Priority colors from ISA-101 */
    .priority-4 {
      color: var(--w-color-status-danger, rgb(226, 32, 40));
      background-color: var(--w-color-status-danger, rgb(226, 32, 40));
    }

    .priority-3 {
      color: var(--w-color-status-warning, rgb(245, 225, 27));
      background-color: var(--w-color-status-warning, rgb(245, 225, 27));
    }

    .priority-2 {
      color: rgb(236, 134, 41);
      background-color: rgb(236, 134, 41);
    }

    .priority-1 {
      color: var(--w-color-status-highlight, rgb(145, 106, 173));
      background-color: var(--w-color-status-highlight, rgb(145, 106, 173));
    }

    .priority-0 {
      color: var(--w-color-status-info, rgb(71, 92, 167));
      background-color: var(--w-color-status-info, rgb(71, 92, 167));
    }

    /* Suppressed state */
    .suppressed {
      background-color: white;
      border: 2px solid currentColor;
    }

    /* Value display */
    .value {
      color: var(--w-color-text, rgb(63, 63, 63));
      font-size: var(--w-font-size-s, 0.75rem);
      margin-left: var(--w-space-xs, 4px);
    }

    .value-unit {
      color: var(--w-color-text-weak, rgb(145, 145, 145));
      font-size: var(--w-font-size-xs, 0.6875rem);
    }

    /* Animation */
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }

    .blinking {
      animation: blink 1s ease-in-out infinite;
    }
  `;

  @property({ type: Number })
  priority: AlarmPriority = 0;

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
      case 4:
        this.shape = 'square';
        break;
      case 3:
        this.shape = 'triangle';
        break;
      case 2:
        this.shape = 'circle';
        break;
      case 1:
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
      </div>
      ${this.value !== undefined ? html`
        <span class="value">
          ${this.value}
          ${this.unit ? html`
            <span class="value-unit">${this.unit}</span>
          ` : null}
        </span>
      ` : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-alarm': WattAlarm;
  }
}