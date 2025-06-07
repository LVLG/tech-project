import { AsyncLocalStorage } from "node:async_hooks";
import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { messageRoute } from "./routes/message";

type RequestContext = {
	value: string;
	requestId: number;
};

const asyncContext = new AsyncLocalStorage<RequestContext>();

export const getRequestContext = () => {
	const ctx = asyncContext.getStore();
	if (!ctx) throw new Error("RequestContext not available");
	return ctx;
};

const withRequestContext = (app: Elysia) =>
	app.onRequest((ctx) => {
		asyncContext.enterWith({
			value: ctx.request.url,
			requestId: Math.random(),
		});
	});

const app = new Elysia()
	.use(
		cors({
			origin:
				process.env.NODE_ENV === "production"
					? "https://your-frontend.com"
					: "http://localhost:5173",
		}),
	)
	.use(swagger())
	.use(withRequestContext)
	.use(messageRoute)
	.listen(3001);

export type App = typeof app;
