var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
let WattAvatar = class WattAvatar extends LitElement {
    constructor() {
        super(...arguments);
        this.name = "";
        this.src = "";
        this.size = "m";
    }
    /**
     * Gets the initials from a name string
     */
    getInitials(name) {
        return name
            .split(" ")
            .map(part => part.charAt(0))
            .join("")
            .toUpperCase()
            .substring(0, 2);
    }
    render() {
        return html `
      <div class="avatar" role="img" aria-label=${this.name}>
        ${this.src
            ? html `<img src=${this.src} alt=${this.name} />`
            : this.getInitials(this.name)}
      </div>
    `;
    }
};
WattAvatar.styles = css `
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
__decorate([
    property({ type: String })
], WattAvatar.prototype, "name", void 0);
__decorate([
    property({ type: String })
], WattAvatar.prototype, "src", void 0);
__decorate([
    property({ type: String, reflect: true })
], WattAvatar.prototype, "size", void 0);
WattAvatar = __decorate([
    customElement("watt-avatar")
], WattAvatar);
export { WattAvatar };
//# sourceMappingURL=index.js.map