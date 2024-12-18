import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type IndicatorType = 
  | 'emergency' 
  | 'high-priority' 
  | 'low-priority' 
  | 'diagnostic' 
  | 'suppressed' 
  | 'nominal';

interface IndicatorConfig {
  backgroundColor: string;
  borderColor: string;
  symbolColor: string;
  icon: string;
  priority: string;
}

const CONFIG: Record<IndicatorType, IndicatorConfig> = {
  emergency: {
    backgroundColor: 'var(--w-color-surface)',
    borderColor: '#E22028',
    symbolColor: '#E22028',
    icon: '■',
    priority: '1'
  },
  'high-priority': {
    backgroundColor: 'var(--w-color-surface)',
    borderColor: '#F5E11B',
    symbolColor: '#F5E11B',
    icon: '▲',
    priority: '2'
  },
  'low-priority': {
    backgroundColor: 'var(--w-color-surface)',
    borderColor: '#EC8629',
    symbolColor: '#EC8629',
    icon: '▼',
    priority: '3'
  },
  diagnostic: {
    backgroundColor: 'var(--w-color-surface)',
    borderColor: '#475CA7',
    symbolColor: '#475CA7',
    icon: '●',
    priority: '4'
  },
  suppressed: {
    backgroundColor: 'var(--w-color-surface)',
    borderColor: '#808080',
    symbolColor: '#808080',
    icon: '○',
    priority: '8'
  },
  nominal: {
    backgroundColor: 'var(--w-color-surface)',
    borderColor: '#808080',
    symbolColor: '#808080',
    icon: '',
    priority: ''
  }
};

@customElement('watt-indicator')
export class WattIndicator extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      gap: 8px;
      align-items: flex-start;
      font-family: Arial, sans-serif;
    }

    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .container-insider {
      display: flex;
      flex-direction: column;
    }

    .priority-group {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 16px;
      margin-bottom: 2px;
    }

    .priority-container {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .priority-symbol {
      font-size: 12px;
      line-height: 1;
    }

    .priority-number {
      font-size: 11px;
      font-weight: bold;
      line-height: 1;
    }

    .unit {
      margin-left: 2px;
      font-size: 11px;
      color: var(--w-color-text);
      line-height: 1;
    }

    .value-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      min-width: 44px;
      height: 20px;
      padding: 0 4px;
      border: 1px solid;
      background-color: var(--indicator-bg);
      border-color: var(--indicator-border);
    }

    .value {
      font-size: 12px;
      line-height: 1;
      font-weight: normal;
      color: var(--w-color-text);
    }

    .label {
      font-size: 12px;
      line-height: 1;
      color: var(--w-color-text);
      padding-top: 1.5em;
      margin-left: 1em;
    }

    /* Override internals */
    @media (forced-colors: active) {
      .value-container {
        border: 1px solid;
      }
    }
  `;

  @property({ type: String })
  accessor type: IndicatorType = 'nominal';

  @property({ type: Number })
  accessor value = 0;

  @property({ type: String })
  accessor unit = 'psig';

  @property({ type: String })
  accessor label = '';

  protected override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('type')) {
      const config = CONFIG[this.type];
      this.style.setProperty('--indicator-bg', config.backgroundColor);
      this.style.setProperty('--indicator-border', config.borderColor);
      this.style.setProperty('--indicator-symbol', config.symbolColor);
    }
  }

  override render() {
    const config = CONFIG[this.type];
    
    return html`
      <div class="container">
        <div class="container-insider">
        <div class="priority-group">
          ${config.icon ? html`
            <div class="priority-container">
              <span class="priority-symbol" style="color: var(--indicator-border)">
                ${config.icon}
              </span>
              <span class="priority-number" style="color: var(--indicator-border)">
                ${config.priority}
              </span>
            </div>
          ` : ''}
          <span class="unit">${this.unit}</span>
        </div>
        <div class="value-container">
          <span class="value">${this.value.toFixed(1)}</span>
        </div>
        </div>
        ${this.label ? html`<span class="label">${this.label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-indicator': WattIndicator;
  }
}