import React from "react"
import "./style.scss"
import TagList from "./tag-list"
import TargetList from "./target-list"

const Todo = () => (
	<div className="list">
		<TagList />
		<TargetList />
	</div>
)

export default Todo
