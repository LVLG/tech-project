import { Elysia } from "elysia";
import { getRequestContext } from "..";

function createQueue<T>() {
	const queue: T[] = [];
	const waiters: (() => void)[] = [];

	return {
		push(item: T) {
			queue.push(item);
			if (waiters.length > 0) {
				waiters.shift()?.();
			}
		},
		async *[Symbol.asyncIterator]() {
			while (true) {
				if (queue.length > 0) {
					yield queue.shift()!;
				} else {
					await new Promise<void>((resolve) => waiters.push(resolve));
				}
			}
		},
	};
}

const randomDelay = () => Math.floor(Math.random() * 4000);

export const messageRoute = new Elysia({ prefix: "/message" })
	.get("", () => ({ message: "Hello from Bun + Elysia" }))
	.get("/stream", async function* () {
		const { value, requestId } = getRequestContext();
		console.log("Request URL:", value);
		console.log("Request ID:", requestId);

		const words = [
			"words",
			"in",
			"a",
			"random",
			"order",
			"with",
			"random",
			"delays",
			"in",
			"a",
			"stream",
		];
		const queue = createQueue<string>();

		words.map(
			(word) =>
				new Promise<void>(() => {
					const delay = randomDelay();
					setTimeout(() => {
						queue.push(`${word} (${delay}ms)`);
					}, delay);
				}),
		);

		let i = 0;
		for await (const word of queue) {
			yield { word: word };
			if (++i === words.length) break;
		}

		yield { word: `done - orginal sentence is: ${words.join(" ")}` };
	});
