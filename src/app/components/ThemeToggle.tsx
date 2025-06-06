import * as stylex from "@stylexjs/stylex";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { useThemeStore } from "../stores/useThemeStore";
import { styles } from "../styles/styles.stylex";

const ThemeToggle: React.FC = () => {
	const toggle = useThemeStore((s) => s.toggleTheme);
	const mode = useThemeStore((s) => s.theme);

	return (
		<button {...stylex.props(styles.button)} onClick={toggle}>
			<motion.div
				initial={false}
				animate={{ rotate: mode === "dark" ? 360 : 0 }}
				transition={{ duration: 0.4 }}
			>
				{mode === "dark" ? <Moon size={18} /> : <Sun size={18} />}
			</motion.div>
			{mode === "dark" ? "Switch to Light" : "Switch to Dark"}
		</button>
	);
};

export default ThemeToggle;
