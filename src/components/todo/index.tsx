import { useSelector } from "@store/main"
import React from "react"
import "./style.scss"
import TagList from "./tag-list"
import TargetList from "./target-list"

const Todo = () => {
	const list = useSelector(state => state.todo)

	return (
		<div className="list">
			<TagList />
			<TargetList list={list} />
		</div>
	)
}

export default Todo
