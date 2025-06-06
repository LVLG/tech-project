import StylexRsPlugin from "@stylexswc/unplugin/vite";
import react from "@vitejs/plugin-react-swc";
import type { PluginOption } from "vite";
import { defineConfig } from "vite";
import Checker from "vite-plugin-checker";

export default defineConfig({
	plugins: [
		react(),
		StylexRsPlugin() as PluginOption,
		Checker({
			typescript: {
				tsconfigPath: "./tsconfig.app.json",
			},
		}),
	],
});
