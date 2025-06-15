import type { TreatyResponse } from "@ap0nia/eden-react-query";

export function handleSteam<T>(
	streamFetcher: () => Promise<TreatyResponse<{ 200: AsyncGenerator<T> }>>,
): () => AsyncGenerator<T> {
	return async function* () {
		const response = await streamFetcher();

		if (response.error !== null) {
			throw new Error("Failed to fetch stream", { cause: response.error });
		}

		for await (const chunk of response.data) {
			yield chunk;
		}
	};
}
