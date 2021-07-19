import { useDispatch } from "@store/main"
import { changeTaskType } from "@store/todo"
import { useDrag, useDrop } from "ahooks"
import React, { FC, MutableRefObject, useRef, useState } from "react"
import { findDOMNode } from "react-dom"
import Add from "./add"
import "./style.scss"
import Task from "./task"
import { ITodoTask, TodoType } from "./task.type"

const TargetList: FC<{ list: ITodoTask[] }> = ({ list }) => {
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

	const itemsRef: MutableRefObject<any> = useRef([])

	const [dragging, setDragging] = useState<string | null>(null)

	const getDragProps = useDrag({
		onDragStart: data => setDragging(data),
		onDragEnd: () => setDragging(null),
	})

	const [props, { isHovering }] = useDrop({
		onDom: (task: ITodoTask, e) => {
			const currentDom = itemsRef.current.find((i: any) =>
				(findDOMNode(i) as Element).contains((e as any).target)
			)
			const type = currentDom?.getAttribute("attr-type")
			finish(task.id || 0, type)
		},
	})

	return (
		<React.Fragment>
			{typeList.map((i, index) => (
				<div
					key={index}
					ref={el => ((itemsRef.current as any)[index] = el)}
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
