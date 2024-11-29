import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-progress-bar")
export class WattProgressBar extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
      font-family: var(--w-font-family);
    }

    .progress-container {
      position: relative;
      height: 4px;
      background: var(--w-color-surface-lowered);
      border-radius: var(--w-border-radius-pill);
      overflow: hidden;
    }

    .progress-bar {
      position: absolute;
      height: 100%;
      background: var(--w-color-accent);
      border-radius: var(--w-border-radius-pill);
      transition: width var(--w-transition-slowly);
    }

    /* Indeterminate animation */
    @keyframes indeterminate {
      0% {
        left: -50%;
        width: 50%;
      }
      100% {
        left: 100%;
        width: 50%;
      }
    }

    .progress-bar.indeterminate {
      animation: indeterminate 2s ease-in-out infinite;
    }

    /* Visually hidden label for screen readers */
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `;

  @property({ type: Number })
  value?: number;

  @property({ type: Number })
  max = 100;

  @property({ type: String })
  label = "Current progress";

  // Validate and normalize value to be between 0 and max
  private get normalizedValue(): number {
    if (typeof this.value !== 'number' || isNaN(this.value)) {
      return 0;
    }
    return Math.min(Math.max(0, this.value), this.max);
  }

  // Convert value to percentage
  private get percentage(): number {
    return (this.normalizedValue / this.max) * 100;
  }

  // Check if progress bar should be indeterminate
  private get isIndeterminate(): boolean {
    return typeof this.value !== 'number';
  }

  // Methods required by the spec
  override focus(options?: FocusOptions): void {
    const container = this.shadowRoot?.querySelector('.progress-container') as HTMLElement;
    container?.focus(options);
  }

  override blur(): void {
    const container = this.shadowRoot?.querySelector('.progress-container') as HTMLElement;
    container?.blur();
  }

  override click(): void {
    const container = this.shadowRoot?.querySelector('.progress-container') as HTMLElement;
    container?.click();
  }

  override render() {
    return html`
      <div
        class="progress-container"
        role="progressbar"
        aria-valuenow="${this.isIndeterminate ? '' : this.normalizedValue}"
        aria-valuemin="0"
        aria-valuemax="${this.max}"
        aria-label="${this.label}"
        tabindex="0"
      >
        <div
          class="progress-bar ${this.isIndeterminate ? 'indeterminate' : ''}"
          style="${this.isIndeterminate ? '' : `width: ${this.percentage}%`}"
        ></div>
      </div>
      <span class="visually-hidden">${this.label}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-progress-bar": WattProgressBar;
  }
}