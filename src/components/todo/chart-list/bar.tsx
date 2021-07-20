import { select } from "d3"
import React, { FC, useEffect } from "react"
import { ITodoTask } from "../target-list/task.type"

const BarChart: FC<{ list: ITodoTask[] }> = ({ list }) => {
	useEffect(() => {
		var dataset = [250, 210, 170, 130, 90]
		var width = 400
		var height = 400
		var svg = select("#bar")
			.append("svg")
			.attr("width", width)
			.attr("height", height)
		var rectHeight = 25
		svg
			.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", 20)
			.attr("y", (d, i) => {
				return i * rectHeight
			})
			.attr("width", d => {
				return d
			})
			.attr("height", rectHeight - 2)
			.attr("fill", "steelblue")
	}, [])

	return <div id="bar">bar</div>
}

export default BarChart
