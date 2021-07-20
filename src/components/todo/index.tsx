import { useSelector } from "@store/main"
import React from "react"
import "./style.scss"
import TagList from "./tag-list"
import TargetList from "./target-list"
import ChartList from "./chart-list"

const Todo = () => {
	const list = useSelector(state => state.todo)

	return (
		<React.Fragment>
			<div className="list">
				<TagList />
				<TargetList list={list} />
			</div>
			{/* <ChartList list={list} /> */}
		</React.Fragment>
	)
}

export default Todo
