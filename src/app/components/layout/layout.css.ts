import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/theme.css";

export const layout = style({
	display: "flex",
	minHeight: "100vh",
	backgroundColor: themeVars.backgroundColor,
	color: themeVars.textColor,
});

export const sidebar = style({
	width: "200px",
	padding: "1rem",
	borderRight: "1px solid #ccc",
});

export const content = style({
	display: "flex",
	flexDirection: "column",
	flex: 1,
	padding: "2rem",
	overflow: "hidden",
});

export const header = style({
	padding: "1rem",
	borderBottom: "1px solid #ccc",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

export const navLink = style({
	display: "block",
	margin: "0.5rem 0",
	textDecoration: "none",
	color: themeVars.textColor,
});
