import { css } from "lit"
import { defaultTheme } from "../../styles/defaultTheme";

export const buttonStyle = css`
    :host {
        button {
            background-color: ${ defaultTheme.colorSurfaceRaised };
            color: ${ defaultTheme.colorAccent };
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        button:hover {
            background-color: ${ defaultTheme.colorOverlay }
        }
    }

    :host([disabled]) {
        button {
            background-color: ${ defaultTheme.colorSurfaceLowered };
            color: ${ defaultTheme.colorTextWeakest };
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: not-allowed;
        } 
    }
`