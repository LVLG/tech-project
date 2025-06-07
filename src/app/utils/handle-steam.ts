import type { TreatyResponse } from "@ap0nia/eden-react-query";

export function handleSteam<T>(
	streamFetcherr: () => Promise<TreatyResponse<{ 200: AsyncGenerator<T> }>>,
): () => AsyncGenerator<T> {
	return async function* () {
		const response = await streamFetcherr();

		if (response.error !== null) {
			throw new Error("Failed to fetch stream", { cause: response.error });
		}

		for await (const chunck of response.data) {
			yield chunck;
		}
	};
}
