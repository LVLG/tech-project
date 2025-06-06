import { CollisionPriority } from "@dnd-kit/abstract";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { useRef, useState } from "react";
import { styles } from "../../styles/styles.stylex";
import { styles as dragDemoStyles } from "./dragDemo.stylex";

const Item: React.FC<{ id: string; index: number; column: string }> = ({
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
		<button
			type="button"
			ref={ref}
			{...stylex.props(
				styles.dragItem,
				isDragging && dragDemoStyles.itemDragging,
			)}
		>
			{id}
		</button>
	);
};

const Column: React.FC<{
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
		<div ref={ref} {...stylex.props(dragDemoStyles.column)}>
			{children}
		</div>
	);
};

type ColumnKey = "A" | "B" | "C";
type ItemsState = Record<ColumnKey, string[]>;

const DragAndDropDemo: React.FC = () => {
	const [items, setItems] = useState<ItemsState>({
		A: ["A0", "A1", "A2"],
		B: ["B0", "B1"],
		C: [],
	});
	const previousItems = useRef(items);
	const [columnOrder, setColumnOrder] = useState<ColumnKey[]>(
		() => Object.keys(items) as ColumnKey[],
	);

	return (
		<DragDropProvider
			onDragStart={() => {
				previousItems.current = items;
			}}
			onDragOver={(event) => {
				const { source } = event.operation;

				if (source?.type === "column") return;

				setItems((items) => move(items, event));
			}}
			onDragEnd={(event) => {
				const { source } = event.operation;

				if (event.canceled) {
					if (source?.type === "item") {
						setItems(previousItems.current);
					}

					return;
				}

				if (source?.type === "column") {
					setColumnOrder((columns) => move(columns, event));
				}
			}}
		>
			<div {...stylex.props(dragDemoStyles.root)}>
				{columnOrder.map((column, columnIndex) => (
					<Column key={column} id={column} index={columnIndex}>
						{items[column].map((id, index) => (
							<Item key={id} id={id} index={index} column={column} />
						))}
					</Column>
				))}
			</div>
		</DragDropProvider>
	);
};

export default DragAndDropDemo;
