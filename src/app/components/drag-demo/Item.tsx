import { useSortable } from "@dnd-kit/react/sortable";
import clsx from "clsx";
import * as styles from "./drag-demo.css";

export const Item: React.FC<{ id: string; index: number; column: string }> = ({
	id,
	index,
	column,
}) => {
	const { ref, isDragging, isDropTarget } = useSortable({
		id,
		index,
		type: "item",
		accept: "item",
		group: column,
	});

	return (
		<div style={{ position: "relative", display: "flex" }}>
			{isDropTarget && (
				<button
					type="button"
					className={clsx(styles.dragItem, isDragging && styles.itemDragging)}
					style={{
						position: "absolute",
						inset: 0,
						pointerEvents: "none",
						zIndex: 1,
						opacity: 0.3,
					}}
				>
					{id}
				</button>
			)}
			<button
				type="button"
				ref={ref}
				className={clsx(styles.dragItem, isDragging && styles.itemDragging)}
				style={{ position: "relative", zIndex: 2, flex: 1 }}
			>
				{id}
			</button>
		</div>
	);
};
