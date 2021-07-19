import React, { FC, useState } from "react"
import "./style.scss"
import ContentInput from "./task-content"
import { TodoType } from "../task.type"

const Add: FC<{ type: [TodoType, TodoType] }> = ({ type }) => {
	const [show, setShow] = useState<boolean>(false)

	return (
		<React.Fragment>
			<div className={show ? "hide" : ""} onClick={() => setShow(true)}>
				+ new
			</div>

			{show && <ContentInput show={show} setShow={setShow} type={type} />}
		</React.Fragment>
	)
}

export default Add
