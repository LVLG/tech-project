import * as stylex from "@stylexjs/stylex";
import { themeVars } from "./theme.stylex";

export const baseButton = {
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

export const styles = stylex.create({
	app: {
		backgroundColor: themeVars.backgroundColor,
		color: themeVars.textColor,
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		transition: "background-color 0.3s ease, color 0.3s ease",
	},
	button: baseButton,
	dragItem: {
		...baseButton,
		cursor: "grab",
		appearance: "none",
		boxShadow: themeVars.itemBoxShadow,
		transform: "scale(1)",
		transition: "transform 0.2s ease, box-shadow 0.2s ease",
	},
	pageContent: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		padding: "2rem",
	},
});
