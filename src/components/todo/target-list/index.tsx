import { useDispatch, useSelector } from "@store/main"
import { useDrag, useDrop } from "ahooks"
import React, { useRef, useState } from "react"
import { findDOMNode } from "react-dom"
import Add from "./add"
import "./style.scss"
import Task from "./task"
import { ITodoTask, TodoType } from "./task.type"
import { changeTaskType } from "@store/todo"

const TargetList = () => {
	const list = useSelector(state => state.todo)

	const dispatch = useDispatch()
	const finish = (id: number, type: [TodoType, TodoType]) =>
		dispatch(changeTaskType({ id, type }))

	const typeList: [TodoType, TodoType][] = [
		[TodoType.URGENT, TodoType.IMPORTANT],
		[TodoType.NOT_URGENT, TodoType.IMPORTANT],
		[TodoType.URGENT, TodoType.NOT_IMPORTANT],
		[TodoType.NOT_URGENT, TodoType.NOT_IMPORTANT],
	]

	const getList = (types: [TodoType, TodoType]) =>
		list.filter(
			(i: any) => i.type.includes(types[0]) && i.type.includes(types[1])
		)

	const ref0: any = useRef()
	const ref1: any = useRef()
	const ref2: any = useRef()
	const ref3: any = useRef()
	const refs = [ref0, ref1, ref2, ref3]

	const [dragging, setDragging] = useState<string | null>(null)
	const getDragProps = useDrag({
		onDragStart: data => setDragging(data),
		onDragEnd: () => setDragging(null),
	})
	const [props, { isHovering }] = useDrop({
		onDom: (task: ITodoTask, e) => {
			const currentDom = refs.find(i =>
				(findDOMNode(i.current) as Element).contains((e as any).target)
			)
			const type = currentDom?.current?.getAttribute("attr-type")
			finish(task.id || 0, type)
		},
	})

	return (
		<React.Fragment>
			{typeList.map((i, index) => (
				<div
					key={i.join("")}
					ref={(refs as any)[index]}
					attr-type={i}
					className="details"
					{...props}>
					{getList(i).map((i: any) => (
						<div key={i.id} {...getDragProps(i)}>
							<Task task={i} />
						</div>
					))}
					<Add type={i} />
				</div>
			))}
		</React.Fragment>
	)
}

export default TargetList
