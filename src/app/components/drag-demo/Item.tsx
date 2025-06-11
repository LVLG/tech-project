import { useSortable } from "@dnd-kit/react/sortable";
import clsx from "clsx";
import * as styles from "./drag-demo.css";

export const Item: React.FC<{ id: string; index: number; column: string }> = ({
	id,
	index,
	column,
}) => {
	const { ref, isDragging } = useSortable({
		id,
		index,
		type: "item",
		accept: "item",
		group: column,
	});

	return (
		// <div style={{ position: "relative", display: "flex" }}>
		<button
			type="button"
			ref={ref}
			className={clsx(styles.dragItem, isDragging && styles.itemDragging)}
		>
			{id}
		</button>
		// </div>
	);
};
