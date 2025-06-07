import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

export const button = style({
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
	transition: "background-color 0.25s ease, transform 0.15s ease",
	textDecoration: "none",
	outline: "none",
});
