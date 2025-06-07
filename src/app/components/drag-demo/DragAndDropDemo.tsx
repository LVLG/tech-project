import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import type React from "react";
import { useState } from "react";
import { Column } from "./Column";
import * as styles from "./drag-demo.css";
import { Item } from "./Item";

type ColumnKey = "A" | "B" | "C" | "D" | "E" | "F" | "G";
type ItemsState = Record<ColumnKey, string[]>;

const DragAndDropDemo: React.FC = () => {
	const initialCounts = [15, 3, 25, 10, 5, 8, 12];
	const columnKeys: ColumnKey[] = ["A", "B", "C", "D", "E", "F", "G"];

	const [items, setItems] = useState<ItemsState>(
		Object.fromEntries(
			columnKeys.map((key, i) => [
				key,
				Array.from({ length: initialCounts[i] }, (_, idx) => `${key}${idx}`),
			]),
		) as ItemsState,
	);
	const [columnOrder] = useState<ColumnKey[]>(
		() => Object.keys(items) as ColumnKey[],
	);

	return (
		<DragDropProvider
			onDragOver={(event) => {
				const { source } = event.operation;

				if (source?.type === "column") return;

				setItems((items) => move(items, event));
			}}
		>
			<div className={styles.root}>
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
