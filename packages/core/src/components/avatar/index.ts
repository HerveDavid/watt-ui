import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("watt-avatar")
export class WattAvatar extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--n-border-radius-circle);
      background-color: var(--n-color-surface-lowered);
      color: var(--n-color-text);
      font-family: var(--n-font-family);
      font-weight: var(--n-font-weight);
      overflow: hidden;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Size variants */
    :host([size="xs"]) .avatar {
      width: var(--n-size-icon-xs);
      height: var(--n-size-icon-xs);
      font-size: calc(var(--n-size-icon-xs) * 0.4);
    }

    :host([size="s"]) .avatar {
      width: var(--n-size-icon-s);
      height: var(--n-size-icon-s);
      font-size: calc(var(--n-size-icon-s) * 0.4);
    }

    :host([size="m"]) .avatar {
      width: var(--n-size-icon-m);
      height: var(--n-size-icon-m);
      font-size: calc(var(--n-size-icon-m) * 0.4);
    }

    :host([size="l"]) .avatar {
      width: var(--n-size-icon-l);
      height: var(--n-size-icon-l);
      font-size: calc(var(--n-size-icon-l) * 0.4);
    }

    :host([size="xl"]) .avatar {
      width: var(--n-size-icon-xl);
      height: var(--n-size-icon-xl);
      font-size: calc(var(--n-size-icon-xl) * 0.4);
    }

    :host([size="xxl"]) .avatar {
      width: var(--n-size-icon-xxl);
      height: var(--n-size-icon-xxl);
      font-size: calc(var(--n-size-icon-xxl) * 0.4);
    }
  `;

  @property({ type: String })
  name = "";

  @property({ type: String })
  src = "";

  @property({ type: String, reflect: true })
  size: "xs" | "s" | "m" | "l" | "xl" | "xxl" = "m";

  /**
   * Gets the initials from a name string
   */
  private getInitials(name: string): string {
    return name
      .split(" ")
      .map(part => part.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2);
  }

  override render() {
    return html`
      <div class="avatar" role="img" aria-label=${this.name}>
        ${this.src
          ? html`<img src=${this.src} alt=${this.name} />`
          : this.getInitials(this.name)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "watt-avatar": WattAvatar;
  }
}