import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import Checker from "vite-plugin-checker";

export default defineConfig(({ command }) => ({
	plugins: [
		react(),
		vanillaExtractPlugin(),
		command === "serve" &&
			Checker({
				typescript: {
					tsconfigPath: "./tsconfig.json",
				},
			}),
	],
}));
