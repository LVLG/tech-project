import { CollisionPriority } from "@dnd-kit/abstract";
import { useSortable } from "@dnd-kit/react/sortable";
import * as styles from "./drag-demo.css";

export const Column: React.FC<{
	id: string;
	index: number;
	children: React.ReactNode;
}> = ({ children, id, index }) => {
	const { ref } = useSortable({
		id,
		index,
		type: "column",
		collisionPriority: CollisionPriority.Low,
		accept: ["item", "column"],
	});

	return (
		<div ref={ref} className={styles.column}>
			{children}
		</div>
	);
};
