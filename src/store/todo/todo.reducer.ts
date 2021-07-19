import { ITodoTask } from "@components/todo/target-list/task.type"
import { handleActions } from "redux-actions"
import {
	addTask,
	AddTask,
	changeTaskType,
	ChangeTaskType,
	finishTask,
	FinishTask,
} from "./todo.actions"
import { mockData } from "./mock"

const initialState: ITodoTask[] = mockData

export const todoReducer = handleActions(
	{
		[addTask.toString()]: (state, action: AddTask) => {
			const id = state.slice(-1)[0].id
			const newTask = { ...action.payload, id: id + 1 }
			return [...state, newTask]
		},
		[finishTask.toString()]: (state, action: FinishTask) => {
			const { id, done } = action.payload
			;(state.find((i: any) => i.id === id) as ITodoTask).done = done
			return state
		},
		[changeTaskType.toString()]: (state, action: ChangeTaskType) => {
			const { id, type } = action.payload
			;(state.find((i: any) => i.id === id) as ITodoTask).type = type
			return state
		},
	},
	initialState
)
