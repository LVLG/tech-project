import { style } from "@vanilla-extract/css";
import { button, glass } from "../../styles/root.css";
import { themeVars } from "../../styles/theme.css";

export const root = style({
	display: "flex",
	flexDirection: "row",
	gap: "20px",
	overflow: "hidden",
	overflowX: "auto",
});

export const column = style([
	glass(),
	{
		display: "flex",
		flexDirection: "column",
		minWidth: "175px",
		maxHeight: "100%",
		borderRadius: "10px",
		overflowY: "auto",
	},
]);

export const itemDragging = style({
	boxShadow: themeVars.itemBoxShadowDragging,
	backgroundColor: themeVars.primaryColor,
});

export const dragItem = style([
	button(),
	{
		cursor: "grab",
		margin: "10px 10px",
	},
]);
