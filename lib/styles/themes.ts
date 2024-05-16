import { css, CSSResultGroup } from "lit";


export interface Theme {
  colorAccent: CSSResultGroup,
  colorText: CSSResultGroup,
}

export const defaultTheme: Theme = {

  // ACCENT COLOR
  colorAccent: css`var(--w-color-accent, rgb(53, 89, 199))`,

  // TEXT COLORS
  colorText: css`var(--w-color-text, rgb(12, 26, 61))`,

}

// export const themes:  CSSResultGroup = css`
// :root {
//   /* Tell the browser whether it’s a light or dark theme
//      so that it uses things like light/dark scrollbars: */

//   /* ACCENT COLOR */
//   --w-color-accent: rgb(53, 89, 199);

//   /* TEXT COLORS */
//   --w-color-text: rgb(12, 26, 61);
//   --w-color-text-link: rgb(53, 89, 199);
//   --w-color-text-weak: rgb(54, 67, 74);
//   --w-color-text-weaker: rgb(102, 118, 128);
//   --w-color-text-weakest: rgb(178, 186, 191);
//   --w-color-text-on-accent: rgb(255, 255, 255);
//   --w-color-text-error: rgb(210, 64, 35);
//   --w-color-text-danger: rgb(178, 48, 21);
//   --w-color-text-success: rgb(17, 118, 39);
//   --w-color-text-neutral: rgb(85, 89, 93);
//   --w-color-text-neutral-strong: rgb(17, 24, 28);
//   --w-color-text-warning: rgb(148, 105, 0);
//   --w-color-text-warning-strong: rgb(51, 40, 16);
//   --w-color-text-highlight: rgb(121, 58, 175);
//   --w-color-text-info: rgb(52, 81, 178);
//   --w-color-text-progress: rgb(1, 109, 131);

//   /* NAVIGATION COLORS */
//   --w-color-nav-surface: rgb(255, 255, 255);
//   --w-color-nav-heading: rgb(143, 161, 170);
//   --w-color-nav-hover: rgb(246, 248, 248);

//   /* BORDER COLORS */
//   --w-color-border: rgb(216, 222, 228);
//   --w-color-border-strong: rgb(188, 197, 204);
//   --w-color-border-neutral: rgb(215, 220, 224);
//   --w-color-border-warning: rgb(248, 216, 124);
//   --w-color-border-highlight: rgb(227, 204, 244);
//   --w-color-border-danger: rgb(250, 199, 190);
//   --w-color-border-success: rgb(183, 223, 186);
//   --w-color-border-info: rgb(198, 212, 249);
//   --w-color-border-progress: rgb(176, 229, 238);

//   /* SKIN COLORS */
//   --w-color-surface: rgb(255, 255, 255);
//   --w-color-background: rgb(250, 251, 251);
//   --w-color-surface-raised: rgb(250, 251, 251);
//   --w-color-surface-lowered: rgb(230, 232, 235);
//   --w-color-overlay: rgba(144, 152, 152, 0.4);

//   /* STATUS COLORS */
//   --w-color-status-neutral: rgb(255, 255, 255);
//   --w-color-status-warning: rgb(246, 205, 90);
//   --w-color-status-highlight: rgb(142, 78, 198);
//   --w-color-status-danger: rgb(210, 64, 35);
//   --w-color-status-success: rgb(29, 134, 51);
//   --w-color-status-info: rgb(62, 99, 221);
//   --w-color-status-progress: rgb(0, 127, 153);
//   --w-color-status-notification: rgb(231, 84, 54);

//   /* STATUS WEAK COLORS */
//   --w-color-status-neutral-weak: rgb(241, 243, 245);
//   --w-color-status-warning-weak: rgb(255, 250, 225);
//   --w-color-status-highlight-weak: rgb(249, 241, 254);
//   --w-color-status-danger-weak: rgb(255, 240, 238);
//   --w-color-status-success-weak: rgb(235, 249, 235);
//   --w-color-status-info-weak: rgb(240, 244, 255);
//   --w-color-status-progress-weak: rgb(231, 249, 251);

//   /* BOX SHADOW COLORS */
//   --w-box-shadow: 0 1px 3px rgba(12, 12, 12, 0.09);
//   --w-box-shadow-card: 0 0 0 1px var(--w-color-border), 0 1px 5px rgba(12, 12, 12, 0.05), 0 0 40px rgba(12, 12, 12, 0.015);
//   --w-box-shadow-header: 0 1px 5px rgba(12, 12, 12, 0.05);
//   --w-box-shadow-modal: 0 24px 38px 3px rgba(12, 12, 12, 0.16), 0 9px 86px 8px rgba(12, 12, 12, 0.1), 0 11px 15px -7px rgba(12, 12, 12, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
//   --w-box-shadow-popout: 0 4px 12px rgba(12, 12, 12, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
//   --w-box-shadow-nav: 0 0 0 1px var(--w-color-border), 0 5px 17px rgba(12, 12, 12, 0.14);
// }
// `;