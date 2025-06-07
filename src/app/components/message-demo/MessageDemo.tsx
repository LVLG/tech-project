import { useQuery } from "@tanstack/react-query";
import { motion, useAnimate } from "motion/react";
import type React from "react";
import { api } from "../../common/api";
import { button } from "../../styles/root.css";
import { messageText, pageContent } from "./message-demo.css";

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
		<div className={pageContent}>
			<button type="button" className={button} onClick={handleClick}>
				Fetch Message
			</button>
			<motion.p ref={scope} className={messageText}>
				{data}
			</motion.p>
		</div>
	);
};

export default MessageDemo;
