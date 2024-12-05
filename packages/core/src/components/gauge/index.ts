import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('watt-gauge')
export class WattGauge extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: var(--gauge-width, 40px);
      height: var(--gauge-height, 200px);
      font-family: var(--w-font-family);
    }

    .gauge {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .gauge-container {
      position: relative;
      width: 100%;
      height: calc(100% - 20px);
      background-color: var(--w-color-surface);
      border: 1px solid var(--w-color-border);
    }

    .gauge-fill {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: var(--w-color-status-info-weak);
      transition: height var(--w-transition-slowly);
    }

    .gauge-marker {
      position: absolute;
      left: -8px;
      width: calc(100% + 16px);
      height: 2px;
      background-color: var(--w-color-text);
    }

    .gauge-label {
      position: absolute;
      right: calc(100% + 4px);
      transform: translateY(-50%);
      font-size: var(--w-font-size-s);
      color: var(--w-color-text);
    }

    .value-indicator {
      position: absolute;
      right: -10px;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 8px solid var(--w-color-text);
      transform: translateY(-50%);
    }

    .gauge-value {
      margin-top: 4px;
      font-size: var(--w-font-size-s);
      color: var(--w-color-text);
      text-align: center;
    }
  `;

  @property({ type: Number })
  value = 0;

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 100;

  @property({ type: Number })
  markerValue = 50;

  @property({ type: String })
  unit = '';

  private getPercentage(value: number): number {
    return ((value - this.min) / (this.max - this.min)) * 100;
  }

  private getMarkerPosition(): number {
    return 100 - this.getPercentage(this.markerValue);
  }

  private getValuePosition(): number {
    return 100 - this.getPercentage(this.value);
  }

  override render() {
    return html`
      <div class="gauge">
        <div class="gauge-container">
          <div 
            class="gauge-fill" 
            style="height: ${this.getPercentage(this.value)}%"
          ></div>
          <div 
            class="gauge-marker" 
            style="top: ${this.getMarkerPosition()}%"
          >
            <span class="gauge-label">${this.markerValue}${this.unit}</span>
          </div>
          <div 
            class="value-indicator"
            style="top: ${this.getValuePosition()}%"
          ></div>
        </div>
        <div class="gauge-value">${this.value}${this.unit}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-gauge': WattGauge;
  }
}