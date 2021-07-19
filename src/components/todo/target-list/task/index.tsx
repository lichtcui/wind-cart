import { useDispatch } from "@store/main"
import React, { FC, useState } from "react"
import { ITodoTask } from "../task.type"
import { finishTask } from "@store/todo"
import "./style.scss"

const Task: FC<{ task: ITodoTask }> = ({ task }) => {
	const { id, content } = task

	const dispatch = useDispatch()
	const finish = (checked: boolean) =>
		dispatch(finishTask({ id, done: checked }))

	const [checked, setChecked] = useState<boolean>(task.done)

	const finishTodo = () => {
		const next = !checked
		setChecked(next)
		finish(next)
	}

	return (
		<div key={id} className="task" onClick={() => finishTodo()}>
			<input checked={checked} type="checkbox" onChange={() => finishTodo()} />
			{content}
		</div>
	)
}

export default Task
