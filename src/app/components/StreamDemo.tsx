import {
	experimental_streamedQuery as streamedQuery,
	useQuery,
} from "@tanstack/react-query";
import clsx from "clsx";
import { motion } from "motion/react";
import { api } from "../common/api";
import * as styles from "../styles/app.css";
import { handleSteam } from "../utils/handleSteam";

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
		<div className={styles.pageContent}>
			<button
				type="button"
				className={clsx(styles.button, styles.streamButton)}
				onClick={() => startStream()}
				disabled={isStreaming}
			>
				Start Word Stream
			</button>
			<div>
				{wordss?.map((word) => (
					<motion.span
						key={word.word}
						className={styles.streamWord}
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
