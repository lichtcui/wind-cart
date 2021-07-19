export enum TodoType {
	URGENT,
	NOT_URGENT,
	IMPORTANT,
	NOT_IMPORTANT,
}

export interface ITodoTask {
	id?: number
	content: string
	updateDate: Date
	done: boolean
	type: [TodoType, TodoType]
}
