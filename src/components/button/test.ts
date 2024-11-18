import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-button")
export class WattButton extends LitElement {
  static styles = css`
    :host {
      /* ISA 101 Button Defaults */
      --button-min-height: 40px;
      --button-min-width: 40px;
      --button-spacing: 10px;
      
      display: inline-block;
      width: fit-content;
    }

    :host([expand]) {
      width: 100%;
    }

    button,
    a {
      font-family: var(--n-font-family);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: inherit;
      border-width: 1px;
      border-style: solid;
      border-radius: var(--n-border-radius-s, 3px);
      transition: all var(--n-transition-slowly, 0.2s ease);
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
      cursor: pointer;
      min-height: var(--button-min-height);
      min-width: var(--button-min-width);
      padding: 0 var(--button-spacing);
      white-space: nowrap;

      /* Size Variables */
      font-size: var(--button-m-font);
    }

    :host([size="s"]) button,
    :host([size="s"]) a {
      font-size: var(--button-s-font);
    }

    :host([size="l"]) button,
    :host([size="l"]) a {
      font-size: var(--button-l-font);
    }

    /* Variant Styles */
    :host([variant="default"]) button,
    :host([variant="default"]) a {
      background-color: var(--button-default-bg);
      border-color: var(--button-default-border);
      color: var(--button-default-color);
    }

    :host([variant="default"]) button:hover,
    :host([variant="default"]) a:hover {
      background-color: var(--button-default-hover);
    }

    :host([variant="primary"]) button,
    :host([variant="primary"]) a {
      background-color: var(--button-primary-bg);
      border-color: var(--button-primary-border);
      color: var(--button-primary-color);
    }

    :host([variant="primary"]) button:hover,
    :host([variant="primary"]) a:hover {
      background-color: var(--button-primary-hover);
    }

    :host([variant="danger"]) button,
    :host([variant="danger"]) a {
      background-color: var(--button-danger-bg);
      border-color: var(--button-danger-border);
      color: var(--button-danger-color);
    }

    :host([variant="danger"]) button:hover,
    :host([variant="danger"]) a:hover {
      background-color: var(--button-danger-hover);
    }

    :host([variant="dashed"]) button,
    :host([variant="dashed"]) a {
      background-color: transparent;
      border-style: dashed;
      border-color: var(--button-default-border);
      color: var(--button-default-color);
    }

    :host([variant="dashed"]) button:hover,
    :host([variant="dashed"]) a:hover {
      background-color: var(--button-default-hover);
    }

    :host([variant="plain"]) button,
    :host([variant="plain"]) a {
      background-color: transparent;
      border-color: transparent;
      color: var(--button-default-color);
    }

    :host([variant="plain"]) button:hover,
    :host([variant="plain"]) a:hover {
      background-color: var(--button-default-hover);
    }

    /* Disabled State */
    :host([disabled]) button,
    :host([disabled]) a,
    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
      background-color: var(--button-disabled-bg);
      border-color: var(--button-disabled-border);
      color: var(--button-disabled-color);
    }

    /* Loading Animation */
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .loading-spinner {
      width: 1em;
      height: 1em;
      border: 2px solid currentColor;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      animation: spin 1s linear infinite;
      margin-right: 0.5em;
    }

    /* Square Button */
    :host([square]) button,
    :host([square]) a {
      aspect-ratio: 1;
      padding: 0;
    }

    /* Navigation Type */
    :host([type="navigation"]) button,
    :host([type="navigation"]) a {
      min-height: 35px;
      min-width: 35px;
      background-color: transparent;
    }

    /* Focus State */
    button:focus,
    a:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--button-primary-border);
    }

    /* Touch Device Support */
    @media (pointer: coarse) {
      button,
      a {
        min-height: 48px;
        min-width: 48px;
      }
    }
  `;

  @property({ type: String, reflect: true })
  variant: "default" | "primary" | "dashed" | "plain" | "danger" = "default";

  @property({ type: String })
  type: "button" | "submit" | "reset" | "navigation" = "button";

  @property({ type: String, reflect: true })
  size: "s" | "m" | "l" = "m";

  @property({ type: String })
  href?: string;

  @property({ type: Boolean })
  download = false;

  @property({ type: String })
  target: "_self" | "_blank" | "_parent" | "_top" = "_self";

  @property({ type: Boolean, reflect: true })
  expand = false;

  @property({ type: Boolean, reflect: true })
  square = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  name?: string;

  @property({ type: String })
  value = "";

  @property({ attribute: false })
  form: HTMLFormElement | null = null;

  private handleClick(e: MouseEvent) {
    if (this.disabled || this.loading) {
      e.preventDefault();
      return;
    }

    const event = new CustomEvent("watt-click", {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    const content = html`
      ${this.loading
        ? html`<span class="loading-spinner" aria-hidden="true"></span>`
        : ""}
      <slot></slot>
    `;

    return this.href
      ? html`
          <a
            href=${this.href}
            download=${this.download}
            target=${this.target}
            @click=${this.handleClick}
            rel=${this.target === "_blank" ? "noopener noreferrer" : ""}
          >${content}</a>`
      : html`
          <button
            type=${this.type}
            ?disabled=${this.disabled || this.loading}
            name=${this.name || ""}
            value=${this.value}
            form=${this.form?.id || ""}
            @click=${this.handleClick}
          >${content}</button>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-button": WattButton;
  }
}