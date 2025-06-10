import {
	Link,
	Outlet,
	useMatchRoute,
	type ValidateLinkOptions,
} from "@tanstack/react-router";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

import { useTheme } from "../../stores/useThemeStore";
import { button, glass } from "../../styles/root.css";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import * as styles from "./layout.css";
import { collapseButton, logo } from "./layout.css";

export default function Layout() {
	const themeClass = useTheme();
	const [isCollapsed, setIsCollapsed] = useState(false);
	const matchRoute = useMatchRoute();

	const navLinks: Record<string, ValidateLinkOptions> = {
		Message: { to: "/message" },
		Stream: { to: "/stream" },
		"Drag And Drop": { to: "/drag-and-drop" },
	};

	return (
		<div className={clsx(styles.layout, themeClass)}>
			<motion.aside
				className={clsx(styles.sidebar, glass())}
				animate={{
					width: isCollapsed ? "fit-content" : "240px",
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<div className={styles.sidebarHeader}>
					<img
						src="https://cdn3.iconfinder.com/data/icons/shiba-inu-dog-emoji-1/500/Smile_shiba_inu_dog_emoticon-512.png"
						alt="Logo"
						className={logo({ size: isCollapsed ? "small" : undefined })}
					/>
					<button
						type="button"
						onClick={() => setIsCollapsed(!isCollapsed)}
						className={collapseButton({ collapsed: isCollapsed })}
						aria-label="Toggle collapse"
					>
						<ChevronLeft size={20} />
					</button>
				</div>
				<div className={styles.navigation}>
					{Object.entries(navLinks).map(([name, link]) => (
						<Link
							key={name}
							to={link.to}
							className={button({
								active: Boolean(matchRoute({ to: link.to })),
							})}
						>
							{name}
						</Link>
					))}
				</div>
				<ThemeToggle />
			</motion.aside>
			<main className={styles.content}>
				<Outlet />
			</main>
		</div>
	);
}
