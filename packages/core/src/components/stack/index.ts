import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type Gap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
type Direction = 'vertical' | 'horizontal';
type Alignment = 'center' | 'start' | 'end' | 'stretch' | undefined;
type Justify = 'center' | 'start' | 'end' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly' | undefined;

@customElement('watt-stack')
export class WattStack extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      box-sizing: border-box;
    }

    :host([direction='vertical']) {
      flex-direction: column;
    }

    :host([direction='horizontal']) {
      flex-direction: row;
    }

    :host([wrap]) {
      flex-wrap: wrap;
    }

    /* Gap mappings */
    :host([gap='none']) {
      --n-stack-gap: 0;
    }

    :host([gap='xs']) {
      --n-stack-gap: var(--n-space-xs);
    }

    :host([gap='s']) {
      --n-stack-gap: var(--n-space-s);
    }

    :host([gap='m']) {
      --n-stack-gap: var(--n-space-m);
    }

    :host([gap='l']) {
      --n-stack-gap: var(--n-space-l);
    }

    :host([gap='xl']) {
      --n-stack-gap: var(--n-space-xl);
    }

    :host([gap='xxl']) {
      --n-stack-gap: var(--n-space-xxl);
    }

    /* Apply gap based on direction */
    :host([direction='vertical']) {
      row-gap: var(--n-stack-gap);
    }

    :host([direction='horizontal']) {
      column-gap: var(--n-stack-gap);
    }
  `;

  @property({ type: String, reflect: true })
  gap: Gap = 'm';

  @property({ type: String, reflect: true })
  direction: Direction = 'vertical';

  @property({ type: String, reflect: true, attribute: 'align-items' })
  alignItems: Alignment = 'stretch';

  @property({ type: Boolean, reflect: true })
  wrap = false;

  @property({ type: String, reflect: true, attribute: 'justify-content' })
  justifyContent: Justify = undefined;

  override updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    // Update flex properties when attributes change
    if (this.alignItems) {
      this.style.alignItems = this.alignItems;
    }

    if (this.justifyContent) {  
      this.style.justifyContent = this.justifyContent;
    }
  }

  override render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-stack': WattStack;
  }
}