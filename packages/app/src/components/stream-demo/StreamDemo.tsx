import {
	experimental_streamedQuery as streamedQuery,
	useQuery,
} from "@tanstack/react-query";
import { motion } from "motion/react";
import { api } from "../../common/api";
import { handleSteam } from "../../utils/handle-steam";
import { messageText, pageContent, streamButton } from "./stream-demo.css";

const StreamDemo: React.FC = () => {
	const {
		refetch: startStream,
		isFetching: isStreaming,
		data: wordss,
	} = useQuery({
		queryKey: ["streamed-words"],
		queryFn: streamedQuery({
			queryFn: handleSteam(api.message.stream.get),
		}),
		enabled: false,
	});

	return (
		<div className={pageContent}>
			<button
				type="button"
				className={streamButton}
				onClick={() => startStream()}
				disabled={isStreaming}
			>
				Start Word Stream
			</button>
			<div>
				{wordss?.map((word) => (
					<motion.span
						key={word.word}
						className={messageText}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
					>
						{word.word}
					</motion.span>
				))}
			</div>
		</div>
	);
};

export default StreamDemo;
