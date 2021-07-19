import { createAction } from "redux-actions"
import { Action } from "./todo.type"
import { ITodoTask, TodoType } from "@components/todo/target-list/task.type"

export const addTask = createAction(Action.add)
export const finishTask = createAction(Action.finish)
export const changeTaskType = createAction(Action.changeType)

export type AddTask = ReturnType<typeof addTask>
export type FinishTask = ReturnType<typeof finishTask>
export type ChangeTaskType = ReturnType<typeof changeTaskType>
