import { ITodoTask, TodoType } from "@components/todo/target-list/task.type"

export const mockData: ITodoTask[] = [
	{
		id: 0,
		content: "text 0",
		updateDate: new Date(2000, 1, 1),
		done: false,
		type: [TodoType.URGENT, TodoType.IMPORTANT],
	},
	{
		id: 1,
		content: "text 1",
		updateDate: new Date(2000, 2, 2),
		done: false,
		type: [TodoType.URGENT, TodoType.NOT_IMPORTANT],
	},
	{
		id: 2,
		content: "text 2",
		updateDate: new Date(2000, 3, 3),
		done: false,
		type: [TodoType.NOT_URGENT, TodoType.NOT_IMPORTANT],
	},
	{
		id: 3,
		content: "text 3",
		updateDate: new Date(2000, 4, 4),
		done: false,
		type: [TodoType.NOT_URGENT, TodoType.IMPORTANT],
	},
]
