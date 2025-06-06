import * as stylex from "@stylexjs/stylex";
import {
	experimental_streamedQuery as streamedQuery,
	useQuery,
} from "@tanstack/react-query";
import { motion } from "motion/react";
import { api } from "../common/api";
import { styles } from "../styles/styles.stylex";
import { themeVars } from "../styles/theme.stylex";
import { handleSteam } from "../utils/handleSteam";

const componentStyle = stylex.create({
	word: {
		fontSize: "1.25rem",
		margin: "0 0.25rem",
		display: "inline-block",
		color: themeVars.textColor,
	},
	button: {
		marginBottom: "1rem",
	},
});

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
		<div {...stylex.props(styles.pageContent)}>
			<button
				{...stylex.props({ ...componentStyle.button, ...styles.button })}
				onClick={() => startStream()}
				disabled={isStreaming}
			>
				Start Word Stream
			</button>
			<div>
				{wordss?.map((word) => (
					<motion.span
						key={word.word}
						{...stylex.props(componentStyle.word)}
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
