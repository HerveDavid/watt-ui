import { css } from "lit";
import { Theme } from "./theme";

export const defaultTheme: Theme = {

  // ACCENT COLOR
  colorAccent: css`var(--w-color-accent, rgb(53, 89, 199))`,

  // TEXT COLORS
  colorText: css`var(--w-color-text, rgb(137, 137, 137))`,
  colorTextLink: css`var(--w-color-text-link, rgb(53, 89, 199))`,
  colorTextWeak: css`var(--w-color-text-weak, rgb(54, 67, 74))`,
  colorTextWeaker: css`var(--w-color-text-weaker, rgb(102, 118, 128))`,
  colorTextWeakest: css`var(--w-color-text-weakest, rgb(178, 186, 191))`,
  colorTextOnAccent: css`var(--w-color-text-on-accent, rgb(255, 255, 255))`,
  colorTextError: css`var(--w-color-text-error, rgb(210, 64, 35))`,
  colorTextDanger: css`var(--w-color-text-danger, rgb(178, 48, 21))`,
  colorTextSuccess: css`var(--w-color-text-success, rgb(17, 118, 39))`,
  colorTextNeutral: css`var(--w-color-text-neutral, rgb(85, 89, 93))`,
  colorTextNeutralStrong: css`var(--w-color-text-neutral-strong, rgb(17, 24, 28))`,
  colorTextWarning: css`var(--w-color-text-warning, rgb(148, 105, 0))`,
  colorTextWarningStrong: css`var(--w-color-text-warning-strong, rgb(51, 40, 16))`,
  colorTextHighlight: css`var(--w-color-text-highlight, rgb(121, 58, 175))`,
  colorTextInfo: css`var(--w-color-text-info, rgb(52, 81, 178))`,
  colorTextProgress: css`var(--w-color-text-progress, rgb(1, 109, 131))`,

  // NAVIGATION COLORS 
  colorNavSurface: css`var(--w-color-nav-surface, rgb(255, 255, 255))`,
  colorNavHeading: css`var(--w-color-nav-heading, rgb(143, 161, 170))`,
  colorNavHover: css`var( --w-color-nav-hover, rgb(246, 248, 248))`,

  // BORDER COLORS
  colorBorder: css`var(--w-color-border, rgb(216, 222, 228))`,
  colorBorderString: css`var(--w-color-border-strong, rgb(188, 197, 204))`,
  colorBorderNeutral: css`var(--w-color-border-neutral, rgb(215, 220, 224))`,
  colorBorderWarning: css`var(--w-color-border-warning, rgb(248, 216, 124))`,
  colorBorderHighlight: css`var(--w-color-border-highlight, rgb(227, 204, 244))`,
  colorBorderDanger: css`var(--w-color-border-danger, rgb(250, 199, 190))`,
  colorBorderSuccess: css`var(--w-color-border-success, rgb(183, 223, 186))`,
  colorBorderInfo: css`var(--w-color-border-info, rgb(198, 212, 249))`,
  colorBorderProgress: css`var(--w-color-border-progress, rgb(176, 229, 238))`,

  // SKIN COLORS
  colorBackground: css`var(--w-color-background, rgb(235, 235, 235))`,
  colorSurface: css`var(--w-color-surface, rgb(255, 255, 255))`,
  colorSurfaceRaised: css`var(--w-color-surface-raised, rgb(250, 251, 251))`,
  colorSurfaceLowered: css`var(--w-color-surface-lowered, rgb(230, 232, 235))`,
  colorOverlay: css`var(--w-color-overlay, rgba(144, 152, 152, 0.4))`,

  // STATUS COLORS
  colorStatusNeutral: css`var(--w-color-status-neutral, rgb(255, 255, 255))`,
  colorStatusWarning: css`var(--w-color-status-warning, rgb(246, 205, 90))`,
  colorStatusHighlight: css`var(--w-color-status-highlight, rgb(142, 78, 198))`,
  colorStatusDanger: css`var(--w-color-status-danger, rgb(210, 64, 35))`,
  colorStatusSuccess: css`var(--w-color-status-success, rgb(29, 134, 51))`,
  colorStatusInfo: css`var(--w-color-status-info, rgb(62, 99, 221))`,
  colorStatusProgress: css`var(--w-color-status-progress, rgb(0, 127, 153))`,
  colorStatusNotification: css`var(--w-color-status-notification, rgb(231, 84, 54))`,

  // STATUS WEAK COLORS
  colorStatusNeutralWeak: css`var(--w-color-status-neutral-weak: rgb(241, 243, 245))`,
  colorStatusWarningWeak: css`var(--w-color-status-warning-weak: rgb(255, 250, 225))`,
  colorStatusHighlightWeak: css`var(--w-color-status-highlight-weak: rgb(249, 241, 254))`,
  colorStatusDangerWeak: css`var(--w-color-status-danger-weak: rgb(255, 240, 238))`,
  colorStatusSuccessWeak: css`var(--w-color-status-success-weak: rgb(235, 249, 235))`,
  colorStatusInfoWeak: css`var(--w-color-status-info-weak: rgb(240, 244, 255))`,
  colorStatusProgressWeak: css`var(--w-color-status-progress-weak: rgb(231, 249, 251))`,

  // BOX SHADOW COLORS
  boxShadow: css`var(--w-box-shadow: 0 1px 3px rgba(12, 12, 12, 0.09))`,
  boxShadowCard: css`var(--w-box-shadow-card: 0 0 0 1px var(--w-color-border), 0 1px 5px rgba(12, 12, 12, 0.05), 0 0 40px rgba(12, 12, 12, 0.015))`,
  boxShadowHeader: css`var(--w-box-shadow-header: 0 1px 5px rgba(12, 12, 12, 0.05))`,
  boxShadowModal: css`var(--w-box-shadow-modal: 0 24px 38px 3px rgba(12, 12, 12, 0.16), 0 9px 86px 8px rgba(12, 12, 12, 0.1), 0 11px 15px -7px rgba(12, 12, 12, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05))`,
  boxShadowPopout: css`var(--w-box-shadow-popout: 0 4px 12px rgba(12, 12, 12, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05))`,
  boxShadowNav: css`var(--w-box-shadow-nav: 0 0 0 1px var(--w-color-border), 0 5px 17px rgba(12, 12, 12, 0.14))`,

}