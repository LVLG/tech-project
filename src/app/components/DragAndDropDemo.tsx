import { CollisionPriority } from "@dnd-kit/abstract";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import type React from "react";
import { useRef, useState } from "react";

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
			data-dragging={isDragging}
			style={{
				appearance: "none",
				background: "#FFF",
				color: "#666",
				padding: "12px 20px",
				border: "none",
				borderRadius: "5px",
				cursor: "grab",
				transition: "transform 0.2s ease, box-shadow 0.2s ease",
				transform: isDragging ? "scale(1.02)" : "scale(1)",
				boxShadow: isDragging
					? "inset 0px 0px 1px rgba(0,0,0,0.5), -1px 0 15px 0 rgba(34, 33, 81, 0.01), 0px 15px 15px 0 rgba(34, 33, 81, 0.25)"
					: "inset 0px 0px 1px rgba(0,0,0,0.4), 0 0 0 1px rgba(63, 63, 68, 0.05), 0px 1px 2px 0 rgba(34, 33, 81, 0.05)",
			}}
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
		<div
			ref={ref}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				padding: "20px",
				minWidth: "175px",
				height: "fit-content",
				backgroundColor: "rgba(0, 0, 0, 0.1)",
				border: "1px solid rgba(0, 0, 0, 0.1)",
				borderRadius: "10px",
			}}
		>
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
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "20px",
					flexWrap: "wrap",
					height: "100%",
					margin: "1rem",
				}}
			>
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
