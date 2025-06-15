import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "../../styles/theme.css";

export const layout = style({
	display: "flex",
	minHeight: "100vh",
	backgroundColor: themeVars.backgroundColor,
	color: themeVars.textColor,
});

export const sidebar = style({
	width: "240px",
	padding: "1rem",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	flexShrink: 0,
	margin: "1rem",
});

export const sidebarHeader = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "1rem",
	height: "40px",
});

export const logo = recipe({
	base: {
		width: "40px",
		height: "40px",
		transition: "width 0.3s ease, height 0.3s ease",
	},
	variants: {
		size: {
			small: {
				width: "30px",
				height: "30px",
			},
		},
	},
});

export const collapseButton = recipe({
	base: {
		background: "none",
		border: "none",
		cursor: "pointer",
		padding: "4px",
		borderRadius: "4px",
		color: themeVars.textColor,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "transform 0.2s ease",
		":hover": {
			backgroundColor: themeVars.hoverColor,
		},
	},
	variants: {
		collapsed: {
			true: {
				transform: "rotate(180deg)",
			},
			false: {
				transform: "rotate(0deg)",
			},
		},
	},
	defaultVariants: {
		collapsed: false,
	},
});

export const navigation = style({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
	flex: 1,
});

export const content = style({
	display: "flex",
	flexDirection: "column",
	flex: 1,
	padding: "1rem",
	overflow: "hidden",
});
