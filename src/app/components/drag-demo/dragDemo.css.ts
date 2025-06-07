import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/theme.css";

export const root = style({
	display: "flex",
	flexDirection: "row",
	gap: "20px",
	flexWrap: "wrap",
	height: "100%",
	margin: "1rem",
});

export const column = style({
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	padding: "20px",
	minWidth: "175px",
	height: "fit-content",
	backgroundColor: themeVars.columnBg,
	border: themeVars.columnBorder,
	borderRadius: "10px",
});

export const itemDragging = style({
	transform: "scale(1.02)",
	boxShadow: themeVars.itemBoxShadowDragging,
});
