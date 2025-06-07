import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const colors = {
	// Neutrals
	white: "#ffffff",
	black: "#000000",
	gray100: "#f7f8fa",
	gray200: "#e9ecef",
	gray300: "#dee2e6",
	gray600: "#6c757d",
	gray800: "#343a40",
	gray900: "#23272f",

	// Brand
	blue500: "#007bff",
	blue600: "#0056b3",

	// Status
	green500: "#28a745",
	red500: "#dc3545",
	yellow500: "#ffc107",

	// Dark mode
	dark900: "#181c20",
	dark800: "#23272f",
	dark700: "#292e36",
};

export const themeVars = createThemeContract({
	backgroundColor: null,
	surfaceColor: null,
	textColor: null,
	textColorMuted: null,

	primaryColor: null,
	primaryColorHover: null,

	columnBg: null,
	columnBgMuted: null,
	columnBorder: null,
	columnBorderMuted: null,

	itemBg: null,
	itemBgMuted: null,
	itemColor: null,
	itemColorMuted: null,

	itemBoxShadow: null,
	itemBoxShadowDragging: null,
});

export const lightTheme = createTheme(themeVars, {
	backgroundColor: colors.gray100,
	surfaceColor: colors.white,
	textColor: colors.gray900,
	textColorMuted: colors.gray600,

	primaryColor: colors.blue500,
	primaryColorHover: colors.blue600,

	columnBg: colors.gray200,
	columnBgMuted: colors.gray300,
	columnBorder: `1px solid ${colors.gray300}`,
	columnBorderMuted: `1px solid ${colors.gray200}`,

	itemBg: colors.white,
	itemBgMuted: colors.gray100,
	itemColor: colors.gray900,
	itemColorMuted: colors.gray600,

	itemBoxShadow: "0 1px 4px rgba(60,72,88,0.07), 0 0 0 1px rgba(63,63,68,0.04)",
	itemBoxShadowDragging:
		"0 4px 16px rgba(60,72,88,0.12), 0 0 0 1px rgba(63,63,68,0.08)",
});

// Dark theme
export const darkTheme = createTheme(themeVars, {
	backgroundColor: colors.dark900,
	surfaceColor: colors.dark700,
	textColor: colors.white,
	textColorMuted: "#cccccc",

	primaryColor: colors.blue500,
	primaryColorHover: colors.blue600,

	columnBg: colors.dark800,
	columnBgMuted: "#1c1f25",
	columnBorder: `1px solid ${colors.dark800}`,
	columnBorderMuted: "1px solid #353a42",

	itemBg: colors.dark700,
	itemBgMuted: colors.dark800,
	itemColor: colors.white,
	itemColorMuted: "#cccccc",

	itemBoxShadow: "0 1px 4px 0 rgba(0,0,0,0.32), 0 0 0 1px rgba(0,0,0,0.18)",
	itemBoxShadowDragging:
		"0 4px 16px 0 rgba(0,0,0,0.45), 0 0 0 1px rgba(0,0,0,0.22)",
});
