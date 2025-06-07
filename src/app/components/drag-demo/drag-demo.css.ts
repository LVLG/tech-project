import { style } from "@vanilla-extract/css";
import { button } from "../../styles/root.css";
import { themeVars } from "../../styles/theme.css";

export const root = style({
	display: "flex",
	flexDirection: "row",
	gap: "20px",
	margin: "1rem",
	overflow: "hidden",
	overflowX: "auto",
});

export const column = style({
	display: "flex",
	flexDirection: "column",
	minWidth: "175px",
	maxHeight: "100%",
	backgroundColor: themeVars.columnBg,
	border: themeVars.columnBorder,
	borderRadius: "10px",
	overflowY: "auto",
});

export const itemDragging = style({
	transform: "scale(1.02)",
	boxShadow: themeVars.itemBoxShadowDragging,
});

export const dragItem = style([
	button(),
	{
		cursor: "grab",
		appearance: "none",
		transform: "scale(1)",
		margin: "10px 10px",
	},
]);
