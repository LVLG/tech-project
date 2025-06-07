import { style } from "@vanilla-extract/css";
import { button } from "../../styles/root.css";
import { themeVars } from "../../styles/theme.css";

export const messageText = style({
	fontSize: "1.5rem",
	fontWeight: "bold",
	marginTop: "2rem",
	color: themeVars.textColor,
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

export const streamButton = style([
	button,
	{
		marginBottom: "1rem",
	},
]);
