import { create } from "zustand";
import { persist } from "zustand/middleware";
import { darkTheme, lightTheme } from "../styles/theme.stylex";

type Theme = "light" | "dark";

type ThemeState = {
	theme: Theme;
	followSystem: boolean;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
	setFollowSystem: (enabled: boolean) => void;
};

function getSystemTheme(): Theme {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set, get) => {
			const media = window.matchMedia("(prefers-color-scheme: dark)");
			media.addEventListener("change", (event) => {
				if (get().followSystem) {
					set({ theme: event.matches ? "dark" : "light" });
				}
			});

			return {
				followSystem: true,
				theme: getSystemTheme(),
				toggleTheme: () =>
					set((s) => ({
						followSystem: false,
						theme: s.theme === "dark" ? "light" : "dark",
					})),
				setTheme: (theme) => set({ followSystem: false, theme }),
				setFollowSystem: (followSystem) => {
					set({ followSystem });
					if (followSystem) {
						set({ theme: getSystemTheme() });
					}
				},
			};
		},
		{
			name: "theme-storage",
		},
	),
);

export function useTheme() {
	const current = useThemeStore((s) => s.theme);
	return current === "dark" ? darkTheme : lightTheme;
}
