import { useThemeStore } from "../../stores/useThemeStore";
import { darkTheme, lightTheme } from "../../styles/theme.stylex";

export function useTheme() {
	const current = useThemeStore((s) => s.theme);
	return current === "dark" ? darkTheme : lightTheme;
}
