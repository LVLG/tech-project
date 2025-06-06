import * as stylex from "@stylexjs/stylex";
import { themeVars } from "./theme.stylex";

export const styles = stylex.create({
	app: {
		backgroundColor: themeVars.backgroundColor,
		color: themeVars.textColor,
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		transition: "background-color 0.4s ease, color 0.4s ease",
	},
	button: {
		backgroundColor: themeVars.buttonColor,
		color: themeVars.textColor,
		border: "none",
		padding: "0.75rem 1.25rem",
		borderRadius: "0.5rem",
		fontSize: "1rem",
		cursor: "pointer",
		transition: "all 0.3s ease-in-out",
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
	},
	pageContent: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});
