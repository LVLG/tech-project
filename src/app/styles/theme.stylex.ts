import { createTheme, defineVars } from "@stylexjs/stylex";

export const themeVars = defineVars({
	backgroundColor: "white",
	textColor: "black",
	buttonColor: "#007bff",
});

export const lightTheme = createTheme(themeVars, {
	backgroundColor: "white",
	textColor: "black",
	buttonColor: "#007bff",
});

export const darkTheme = createTheme(themeVars, {
	backgroundColor: "#121212",
	textColor: "#f1f1f1",
	buttonColor: "#ff9800",
});
