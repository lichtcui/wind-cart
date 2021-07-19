import React from "react"
import "./style.scss"

const TagList = () => (
	<React.Fragment>
		<div className="tag urgent">Urgent</div>
		<div className="tag not-urgent">Not Urgent</div>
		<div className="tag important">Important</div>
		<div className="tag not-important">Not Important</div>
	</React.Fragment>
)

export default TagList
