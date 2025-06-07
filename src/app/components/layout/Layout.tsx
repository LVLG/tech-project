import {
	Link,
	Outlet,
	useRouterState,
	type ValidateLinkOptions,
} from "@tanstack/react-router";
import clsx from "clsx";
import { useMemo } from "react";
import { useTheme } from "../../stores/useThemeStore";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import * as styles from "./layout.css";

export default function Layout() {
	const themeClass = useTheme();

	const pathname = useRouterState({
		select: (s) => s.location.pathname,
	});

	const navLinks: Record<string, ValidateLinkOptions> = {
		Message: { to: "/message" },
		Stream: { to: "/stream" },
		DragAndDrop: { to: "/drag-and-drop" },
	};

	const currentRouteName = useMemo(() => {
		return (
			Object.entries(navLinks).find(([_, link]) => link.to === pathname)?.[0] ||
			"Home"
		);
	}, [pathname]);

	return (
		<div className={clsx(styles.layout, themeClass)}>
			<aside className={styles.sidebar}>
				{Object.entries(navLinks).map(([name, link]) => (
					<Link key={name} to={link.to} className={styles.navLink}>
						{name}
					</Link>
				))}
			</aside>
			<main className={styles.content}>
				<div className={styles.header}>
					<h2>{currentRouteName}</h2>
					<ThemeToggle />
				</div>
				<Outlet />
			</main>
		</div>
	);
}
