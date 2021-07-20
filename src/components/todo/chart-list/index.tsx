import React, { FC } from "react"
import { ITodoTask } from "../target-list/task.type"
import BarChart from "./bar"
import PieChart from "./pie"

const ChartList: FC<{ list: ITodoTask }> = ({ list }) => {
	return (
		<div>
			<BarChart list={list} />
			<PieChart list={list} />
		</div>
	)
}

export default ChartList
