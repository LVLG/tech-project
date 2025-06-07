import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import Checker from "vite-plugin-checker";

export default defineConfig({
	plugins: [
		react(),
		vanillaExtractPlugin(),
		Checker({
			typescript: {
				tsconfigPath: "./tsconfig.app.json",
			},
		}),
	],
});
