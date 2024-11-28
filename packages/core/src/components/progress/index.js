var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let WattProgressBar = class WattProgressBar extends LitElement {
    constructor() {
        super(...arguments);
        this.max = 100;
        this.label = "Current progress";
    }
    // Validate and normalize value to be between 0 and max
    get normalizedValue() {
        if (typeof this.value !== 'number' || isNaN(this.value)) {
            return 0;
        }
        return Math.min(Math.max(0, this.value), this.max);
    }
    // Convert value to percentage
    get percentage() {
        return (this.normalizedValue / this.max) * 100;
    }
    // Check if progress bar should be indeterminate
    get isIndeterminate() {
        return typeof this.value !== 'number';
    }
    // Methods required by the spec
    focus(options) {
        const container = this.shadowRoot?.querySelector('.progress-container');
        container?.focus(options);
    }
    blur() {
        const container = this.shadowRoot?.querySelector('.progress-container');
        container?.blur();
    }
    click() {
        const container = this.shadowRoot?.querySelector('.progress-container');
        container?.click();
    }
    render() {
        return html `
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
};
WattProgressBar.styles = css `
    :host {
      display: block;
      width: 100%;
      font-family: var(--n-font-family);
    }

    .progress-container {
      position: relative;
      height: 4px;
      background: var(--n-color-surface-lowered);
      border-radius: var(--n-border-radius-pill);
      overflow: hidden;
    }

    .progress-bar {
      position: absolute;
      height: 100%;
      background: var(--n-color-accent);
      border-radius: var(--n-border-radius-pill);
      transition: width var(--n-transition-slowly);
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
__decorate([
    property({ type: Number })
], WattProgressBar.prototype, "value", void 0);
__decorate([
    property({ type: Number })
], WattProgressBar.prototype, "max", void 0);
__decorate([
    property({ type: String })
], WattProgressBar.prototype, "label", void 0);
WattProgressBar = __decorate([
    customElement("watt-progress-bar")
], WattProgressBar);
export { WattProgressBar };
//# sourceMappingURL=index.js.map