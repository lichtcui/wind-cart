import { useDispatch } from "@store/main"
import { addTask } from "@store/todo"
import { useKeyPress, useClickAway } from "ahooks"
import React, { FC, MutableRefObject, useRef, useState } from "react"
import "./style.scss"
import { TodoType } from "../task.type"

const ContentInput: FC<{
	show: boolean
	setShow: (show: boolean) => void
	type: [TodoType, TodoType]
}> = ({ setShow, type }) => {
	const dispatch = useDispatch()
	const addTodo = (content: string) =>
		dispatch(addTask({ content, done: false, type, updateDate: new Date() }))

	const ref: MutableRefObject<any> = useRef()

	useClickAway(() => setShow(false), ref)

	const [text, setText] = useState<string>("")

	useKeyPress("Enter", () => {
		addTodo(text)
		setShow(false)
	})

	useKeyPress("esc", () => setShow(false))

	return (
		<input
			ref={ref}
			className="input"
			onChange={e => setText(e.target.value)}
		/>
	)
}

export default ContentInput
