import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "./theme.css";

export const button = recipe({
	base: [
		{
			backgroundColor: themeVars.itemBg,
			color: themeVars.itemColor,
			border: "none",
			boxShadow: themeVars.itemBoxShadow,
			padding: "0.75rem 1.25rem",
			cursor: "pointer",
			borderRadius: "0.5rem",
			fontSize: "1rem",
			fontWeight: 500,
			display: "flex",
			alignItems: "center",
			gap: "0.5rem",
			textDecoration: "none",
			outline: "none",
			minWidth: "fit-content",
			transition: "all 0.2s ease",
			":hover": {
				backgroundColor: themeVars.primaryColorHover,
			},
			":active": {
				backgroundColor: themeVars.primaryColor,
				color: themeVars.surfaceColor,
			},
		},
	],
	variants: {
		active: {
			true: {
				backgroundColor: themeVars.primaryColor,
				color: themeVars.surfaceColor,
			},
		},
	},
	defaultVariants: {
		active: false,
	},
});
