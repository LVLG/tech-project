import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/theme.css";

export const layout = style({
	display: "flex",
	minHeight: "100vh",
	backgroundColor: themeVars.backgroundColor,
	color: themeVars.textColor,
});

export const sidebar = style({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
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

export const navLink = style({
	textDecoration: "none",
	color: themeVars.textColor,
	fontWeight: "bold",
	padding: "0.5rem 1rem",
	borderRadius: "4px",
	transition: "background-color 0.3s, color 0.3s",

	":hover": {
		backgroundColor: themeVars.primaryColor,
		color: themeVars.backgroundColor,
	},
});

export const navigation = style({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
	marginBottom: "1rem",
});

export const pageLink = style({
	textDecoration: "none",
	color: themeVars.textColor,
	fontWeight: "bold",
	padding: "0.5rem 1rem",
	borderRadius: "4px",
	transition: "background-color 0.3s, color 0.3s",

	":hover": {
		backgroundColor: themeVars.primaryColor,
		color: themeVars.backgroundColor,
	},
});
