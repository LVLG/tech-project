import * as stylex from "@stylexjs/stylex";
import { themeVars } from "../../styles/theme.stylex";

export const styles = stylex.create({
	root: {
		display: "flex",
		flexDirection: "row",
		gap: "20px",
		flexWrap: "wrap",
		height: "100%",
		margin: "1rem",
	},
	column: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		padding: "20px",
		minWidth: "175px",
		height: "fit-content",
		backgroundColor: themeVars.columnBg,
		border: themeVars.columnBorder,
		borderRadius: "10px",
	},
	itemDragging: {
		transform: "scale(1.02)",
		boxShadow: themeVars.itemBoxShadowDragging,
	},
});
