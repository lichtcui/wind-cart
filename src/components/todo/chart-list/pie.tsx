import React, { FC } from "react"
import { ITodoTask, TodoType } from "../target-list/task.type"
import { create, pie } from "d3"

const initPieces = new Array(4).fill("").map(() => ({
	done: 0,
	undone: 0,
}))

const PieChart: FC<{ list: ITodoTask[] }> = ({ list }) => {
	const pieces = list.reduce((prev, next) => {
		const nextType = next.type

		const getDataFromIndex = (index: number) => {
			const field = prev[nextType[index]]
			return {
				...field,
				...(next.done
					? { done: field.done + 1 }
					: { undone: field.undone + 1 }),
			}
		}

		prev[nextType[0]] = getDataFromIndex(0)
		prev[nextType[1]] = getDataFromIndex(1)

		return prev
	}, initPieces)

	const data = pieces.map(i => i.done + i.undone)

	const arcs = pie()(pieces.map(i => i.done + i.undone))

	console.log("arcs", arcs)
	return <div>pie</div>
}

export default PieChart
