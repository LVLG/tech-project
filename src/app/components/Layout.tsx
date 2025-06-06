import * as stylex from "@stylexjs/stylex";
import { Link, Outlet, type ValidateLinkOptions } from "@tanstack/react-router";
import { useTheme } from "../stores/useThemeStore";
import { themeVars } from "../styles/theme.stylex";
import ThemeToggle from "./ThemeToggle";

const styles = stylex.create({
	layout: {
		display: "flex",
		minHeight: "100vh",
		backgroundColor: themeVars.backgroundColor,
		color: themeVars.textColor,
	},
	sidebar: {
		width: "200px",
		padding: "1rem",
		borderRight: "1px solid #ccc",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		padding: "2rem",
	},
	header: {
		padding: "1rem",
		borderBottom: "1px solid #ccc",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	navLink: {
		display: "block",
		margin: "0.5rem 0",
		textDecoration: "none",
		color: themeVars.textColor,
	},
});

export default function Layout() {
	const theme = useTheme();

	const navLinks: Record<string, ValidateLinkOptions> = {
		Message: { to: "/message" },
		Stream: { to: "/stream" },
		DragAndDrop: { to: "/drag-and-drop" },
	};

	return (
		<div {...stylex.props(styles.layout, theme)}>
			<aside {...stylex.props(styles.sidebar)}>
				{Object.entries(navLinks).map(([name, link]) => (
					<Link key={name} to={link.to} {...stylex.props(styles.navLink)}>
						{name}
					</Link>
				))}
			</aside>
			<main {...stylex.props(styles.content)}>
				<div {...stylex.props(styles.header)}>
					<h2>Demo App</h2>
					<ThemeToggle />
				</div>
				<Outlet />
			</main>
		</div>
	);
}
