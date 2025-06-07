import { Link, Outlet, type ValidateLinkOptions } from "@tanstack/react-router";
import clsx from "clsx";
import { useTheme } from "../../stores/useThemeStore";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import * as styles from "./layout.css";

export default function Layout() {
	const themeClass = useTheme();

	const navLinks: Record<string, ValidateLinkOptions> = {
		Message: { to: "/message" },
		Stream: { to: "/stream" },
		DragAndDrop: { to: "/drag-and-drop" },
	};

	return (
		<div className={clsx(styles.layout, themeClass)}>
			<aside className={styles.sidebar}>
				<div className={styles.navigation}>
					{Object.entries(navLinks).map(([name, link]) => (
						<Link key={name} to={link.to} className={styles.navLink}>
							{name}
						</Link>
					))}
				</div>
				<ThemeToggle />
			</aside>
			<main className={styles.content}>
				<Outlet />
			</main>
		</div>
	);
}
