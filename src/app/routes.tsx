import {
	createRootRoute,
	createRoute,
	createRouter,
	redirect,
} from "@tanstack/react-router";
import DragAndDropDemo from "./components/drag-demo/DragAndDropDemo";
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

const dragAndDropRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "drag-and-drop",
	component: DragAndDropDemo,
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
	dragAndDropRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
