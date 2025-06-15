import { globalStyle } from "@vanilla-extract/css";
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

export const glass = recipe({
	base: {
		borderRadius: "16px",
		boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
	},
	variants: {
		transparency: {
			low: {
				background: `rgba(${themeVars.glassColor}, 0.15)`,
				border: `1px solid rgba(${themeVars.glassColor}, 0.2)`,
			},
			medium: {
				background: `rgba(${themeVars.glassColor}, 0.3)`,
				border: `1px solid rgba(${themeVars.glassColor}, 0.35)`,
			},
			high: {
				background: `rgba(${themeVars.glassColor}, 0.6)`,
				border: `1px solid rgba(${themeVars.glassColor}, 0.65)`,
			},
		},
		blur: {
			none: {
				backdropFilter: "blur(0px)",
				WebkitBackdropFilter: "blur(0px)",
			},
			slight: {
				backdropFilter: "blur(3px)",
				WebkitBackdropFilter: "blur(3px)",
			},
			medium: {
				backdropFilter: "blur(5.4px)",
				WebkitBackdropFilter: "blur(5.4px)",
			},
			heavy: {
				backdropFilter: "blur(10px)",
				WebkitBackdropFilter: "blur(10px)",
			},
		},
		outline: {
			none: {
				border: "none",
			},
			outline: {
				border: `1px solid rgba(${themeVars.glassColor}, 0.2)`,
			},
		},
	},
	defaultVariants: {
		transparency: "medium",
		blur: "medium",
		outline: "outline",
	},
});

// Firefox
globalStyle("*", {
	scrollbarWidth: "thin",
	scrollbarColor: `${themeVars.primaryColor} transparent`,
});

// Webkit (Chrome, Safari, Edge)
globalStyle("*::-webkit-scrollbar", {
	width: "8px",
	height: "8px",
});

globalStyle("*::-webkit-scrollbar-track", {
	background: "transparent",
});

globalStyle("*::-webkit-scrollbar-thumb", {
	backgroundColor: themeVars.primaryColor,
	borderRadius: "10px",
	border: "2px solid transparent",
	backgroundClip: "content-box",
});

globalStyle("html, body", {
	margin: 0,
	padding: 0,
	height: "100%",
	overflow: "hidden",
});

globalStyle("#root", {
	display: "flex",
	flexDirection: "column",
	height: "100%",
});
