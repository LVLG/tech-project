import {
	createRootRoute,
	createRoute,
	createRouter,
	redirect,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import MessageDemo from "./components/MessageDemo";
import StreamDemo from "./components/StreamDemo";

const rootRoute = createRootRoute({
	component: Layout,
});

const messageRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "message",
	component: MessageDemo,
});

const streamRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "stream",
	component: StreamDemo,
});

const redirectRoute = createRoute({
	path: "/",
	getParentRoute: () => rootRoute,
	beforeLoad: () => {
		throw redirect({
			to: "/message",
		});
	},
});

const routeTree = rootRoute.addChildren([
	messageRoute,
	streamRoute,
	redirectRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
