import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type StackGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
type StackDirection = 'vertical' | 'horizontal';
type StackAlign = 'center' | 'start' | 'end' | 'stretch';
type StackJustify = 'center' | 'start' | 'end' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly';

@customElement('watt-stack')
export class WattStack extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      box-sizing: border-box;
      --stack-gap: var(--w-stack-gap, var(--w-space-m));
      font-family: var(--w-font-family);
    }

    :host([direction="vertical"]) {
      flex-direction: column;
    }

    :host([direction="horizontal"]) {
      flex-direction: row;
    }

    :host([wrap]) {
      flex-wrap: wrap;
    }

    /* Gap spacings using theme variables */
    :host([gap="none"]) {
      gap: 0;
    }
    :host([gap="xs"]) {
      gap: var(--w-space-xs);
    }
    :host([gap="s"]) {
      gap: var(--w-space-s);
    }
    :host([gap="m"]) {
      gap: var(--w-space-m);
    }
    :host([gap="l"]) {
      gap: var(--w-space-l);
    }
    :host([gap="xl"]) {
      gap: var(--w-space-xl);
    }
    :host([gap="xxl"]) {
      gap: var(--w-space-xxl);
    }

    /* Alignment variations */
    :host([align-items="center"]) {
      align-items: center;
    }
    :host([align-items="start"]) {
      align-items: flex-start;
    }
    :host([align-items="end"]) {
      align-items: flex-end;
    }
    :host([align-items="stretch"]) {
      align-items: stretch;
    }

    /* Justify content variations */
    :host([justify-content="center"]) {
      justify-content: center;
    }
    :host([justify-content="start"]) {
      justify-content: flex-start;
    }
    :host([justify-content="end"]) {
      justify-content: flex-end;
    }
    :host([justify-content="baseline"]) {
      justify-content: baseline;
    }
    :host([justify-content="space-between"]) {
      justify-content: space-between;
    }
    :host([justify-content="space-around"]) {
      justify-content: space-around;
    }
    :host([justify-content="space-evenly"]) {
      justify-content: space-evenly;
    }

    ::slotted(*) {
      box-sizing: border-box;
    }
  `;

  @property({ type: String, reflect: true })
  gap: StackGap = 'm';

  @property({ type: String, reflect: true })
  direction: StackDirection = 'vertical';

  @property({ type: String, reflect: true, attribute: 'align-items' })
  alignItems: StackAlign = 'stretch';

  @property({ type: Boolean, reflect: true })
  wrap = false;

  @property({ type: String, reflect: true, attribute: 'justify-content' })
  justifyContent?: StackJustify;

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'watt-stack': WattStack;
  }
}