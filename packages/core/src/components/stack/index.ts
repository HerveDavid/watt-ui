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
      --w-stack-gap: 0;
    }

    :host([gap='xs']) {
      --w-stack-gap: var(--w-space-xs);
    }

    :host([gap='s']) {
      --w-stack-gap: var(--w-space-s);
    }

    :host([gap='m']) {
      --w-stack-gap: var(--w-space-m);
    }

    :host([gap='l']) {
      --w-stack-gap: var(--w-space-l);
    }

    :host([gap='xl']) {
      --w-stack-gap: var(--w-space-xl);
    }

    :host([gap='xxl']) {
      --w-stack-gap: var(--w-space-xxl);
    }

    /* Apply gap based on direction */
    :host([direction='vertical']) {
      row-gap: var(--w-stack-gap);
    }

    :host([direction='horizontal']) {
      column-gap: var(--w-stack-gap);
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