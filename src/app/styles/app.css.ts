import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

const baseButton = {
	backgroundColor: themeVars.itemBg,
	color: themeVars.itemColor,
	border: "none",
	padding: "0.75rem 1.25rem",
	cursor: "pointer",
	borderRadius: "0.5rem",
	fontSize: "1rem",
	fontWeight: 500,
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
	transition: "background-color 0.25s ease, transform 0.15s ease",
	textDecoration: "none",
	outline: "none",
};

export const app = style({
	backgroundColor: themeVars.backgroundColor,
	color: themeVars.textColor,
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	transition: "background-color 0.3s ease, color 0.3s ease",
});

export const button = style(baseButton);

export const dragItem = style({
	...baseButton,
	cursor: "grab",
	appearance: "none",
	boxShadow: themeVars.itemBoxShadow,
	transform: "scale(1)",
	transition: "transform 0.2s ease, box-shadow 0.2s ease",
});

export const pageContent = style({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	padding: "2rem",
});

export const streamWord = style({
	fontSize: "1.25rem",
	margin: "0 0.25rem",
	display: "inline-block",
	color: themeVars.textColor,
});

export const streamButton = style({
	marginBottom: "1rem",
});

export const messageText = style({
	fontSize: "1.5rem",
	fontWeight: "bold",
	marginTop: "2rem",
	color: themeVars.textColor,
});

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
