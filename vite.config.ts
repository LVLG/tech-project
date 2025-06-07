import react from "@vitejs/plugin-react";
import type { PluginOption } from "vite";
import { defineConfig } from "vite";
import Checker from "vite-plugin-checker";
import styleX from "vite-plugin-stylex";

export default defineConfig({
	plugins: [
		react(), // must be plugin-react, not plugin-react-swc
		Checker({
			typescript: {
				tsconfigPath: "./tsconfig.app.json",
			},
		}),
		styleX() as PluginOption,
	],
});
