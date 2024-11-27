import { LitElement, html, css, svg, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type IconSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
type IconResolver = (name: string) => string | Promise<string>;

@customElement('watt-icon')
export class WattIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: var(--n-size-icon-m);
      height: var(--n-size-icon-m);
      color: var(--n-color-icon);
      vertical-align: middle;
    }

    :host([size='xxs']) {
      width: var(--n-size-icon-xxs);
      height: var(--n-size-icon-xxs);
    }

    :host([size='xs']) {
      width: var(--n-size-icon-xs);
      height: var(--n-size-icon-xs);
    }

    :host([size='s']) {
      width: var(--n-size-icon-s);
      height: var(--n-size-icon-s);
    }

    :host([size='l']) {
      width: var(--n-size-icon-l);
      height: var(--n-size-icon-l);
    }

    :host([size='xl']) {
      width: var(--n-size-icon-xl);
      height: var(--n-size-icon-xl);
    }

    :host([size='xxl']) {
      width: var(--n-size-icon-xxl);
      height: var(--n-size-icon-xxl);
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: currentColor;
      transition: var(--n-transition-quickly);
    }

    :host(:hover) {
      color: var(--n-color-icon-hover);
    }
  `;

  private static iconRegistry = new Map<string, string>();
  private static resolver: IconResolver | undefined;

  @property({ type: String, reflect: true })
  name = '';

  @property({ type: String, reflect: true })
  size: IconSize = 'm';

  @property({ type: String })
  color?: string;

  @property({ type: String })
  label?: string;

  static registerResolver(resolver: IconResolver): void {
    WattIcon.resolver = resolver;
  }

  static registerIcon(iconOrName: string | { title: string; default: string }, icon?: string): void {
    if (typeof iconOrName === 'string') {
      if (icon) {
        WattIcon.iconRegistry.set(iconOrName, icon);
      }
    } else {
      WattIcon.iconRegistry.set(iconOrName.title, iconOrName.default);
    }
  }

  private async getIcon(): Promise<string | undefined> {
    const cachedIcon = WattIcon.iconRegistry.get(this.name);
    if (cachedIcon) return cachedIcon;

    if (WattIcon.resolver) {
      try {
        const resolvedIcon = await WattIcon.resolver(this.name);
        WattIcon.iconRegistry.set(this.name, resolvedIcon);
        return resolvedIcon;
      } catch (error) {
        console.warn(`Failed to load icon: ${this.name}`, error);
      }
    }
    
    return undefined;
  }

  render() {
    const ariaHidden = this.label ? 'false' : 'true';
    const ariaLabel = this.label || undefined;
    const style = this.color ? `color: ${this.color}` : '';

    return html`
      <slot>
        <svg 
          part="svg"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 48 48"
          aria-hidden=${ariaHidden}
          aria-label=${ariaLabel || nothing}
          role=${this.label ? 'img' : 'presentation'}
          style=${style}
        >
          ${this.name ? this.renderIcon() : nothing}
        </svg>
      </slot>
    `;
  }

  private async renderIcon() {
    const icon = await this.getIcon();
    if (!icon) {
      console.warn(`Icon not found: ${this.name}`);
      return nothing;
    }

    const template = document.createElement('template');
    template.innerHTML = icon;
    return template.content;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-icon': WattIcon;
  }
}