import { CSSResultGroup } from "lit";

export interface Theme {
    // ACCENT COLOR
    colorAccent: CSSResultGroup,
  
    // TEXT COLORS
    colorText: CSSResultGroup,
    colorTextLink: CSSResultGroup,
    colorTextWeak: CSSResultGroup,
    colorTextWeaker: CSSResultGroup,
    colorTextWeakest: CSSResultGroup,
    colorTextOnAccent: CSSResultGroup,
    colorTextError: CSSResultGroup,
    colorTextDanger: CSSResultGroup,
    colorTextSuccess: CSSResultGroup,
    colorTextNeutral: CSSResultGroup,
    colorTextNeutralStrong: CSSResultGroup,
    colorTextWarning: CSSResultGroup,
    colorTextWarningStrong: CSSResultGroup,
    colorTextHighlight: CSSResultGroup,
    colorTextInfo: CSSResultGroup,
    colorTextProgress: CSSResultGroup,
  
    // NAVIGATION COLORS 
    colorNavSurface: CSSResultGroup,
    colorNavHeading: CSSResultGroup,
    colorNavHover: CSSResultGroup,
  
    // BORDER COLORS
    colorBorder: CSSResultGroup,
    colorBorderString: CSSResultGroup,
    colorBorderNeutral: CSSResultGroup,
    colorBorderWarning: CSSResultGroup,
    colorBorderHighlight: CSSResultGroup,
    colorBorderDanger: CSSResultGroup,
    colorBorderSuccess: CSSResultGroup,
    colorBorderInfo: CSSResultGroup,
    colorBorderProgress: CSSResultGroup,
  
    // SKIN COLORS
    colorBackground: CSSResultGroup,
    colorSurface: CSSResultGroup,
    colorSurfaceRaised: CSSResultGroup,
    colorSurfaceLowered: CSSResultGroup,
    colorOverlay: CSSResultGroup,
  
    // STATUS COLORS
    colorStatusNeutral: CSSResultGroup,
    colorStatusWarning: CSSResultGroup,
    colorStatusHighlight: CSSResultGroup,
    colorStatusDanger: CSSResultGroup,
    colorStatusSuccess: CSSResultGroup,
    colorStatusInfo: CSSResultGroup,
    colorStatusProgress: CSSResultGroup,
    colorStatusNotification: CSSResultGroup,
  
    // STATUS WEAK COLORS
    colorStatusNeutralWeak: CSSResultGroup,
    colorStatusWarningWeak: CSSResultGroup,
    colorStatusHighlightWeak: CSSResultGroup,
    colorStatusDangerWeak: CSSResultGroup,
    colorStatusSuccessWeak: CSSResultGroup,
    colorStatusInfoWeak: CSSResultGroup,
    colorStatusProgressWeak: CSSResultGroup,
  
    // BOX SHADOW COLORS
    boxShadow: CSSResultGroup,
    boxShadowCard: CSSResultGroup,
    boxShadowHeader: CSSResultGroup,
    boxShadowModal: CSSResultGroup,
    boxShadowPopout: CSSResultGroup,
    boxShadowNav: CSSResultGroup,
  }