import * as stylex from "@stylexjs/stylex";
import { useQuery } from "@tanstack/react-query";
import { motion, useAnimate } from "motion/react";
import { api } from "../common/api";
import { styles } from "../styles/styles.stylex";
import { themeVars } from "../styles/theme.stylex";

const componentStyle = stylex.create({
	message: {
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginTop: "2rem",
		color: themeVars.textColor,
	},
});

const MessageDemo: React.FC = () => {
	const [scope, animate] = useAnimate();

	const { data, refetch } = useQuery({
		queryKey: ["hello"],
		queryFn: async () => {
			const res = await api.message.get();
			return res.data?.message;
		},
		enabled: false,
	});

	const handleClick = () => {
		refetch().then((result) => {
			if (result.data) {
				animate(
					scope.current,
					{ opacity: [0, 1], y: [20, 0] },
					{ duration: 0.5 },
				);
			}
		});
	};

	return (
		<div {...stylex.props(styles.pageContent)}>
			<button {...stylex.props(styles.button)} onClick={handleClick}>
				Fetch Message
			</button>
			<motion.p ref={scope} {...stylex.props(componentStyle.message)}>
				{data}
			</motion.p>
		</div>
	);
};

export default MessageDemo;
