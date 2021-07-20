import { createAction } from "redux-actions"
import { Action } from "./cart.type"

export const addProduct = createAction(Action.add)
export const removeProduct = createAction(Action.remove)

export type AddProduct = ReturnType<typeof addProduct>
export type RemoveProduct = ReturnType<typeof removeProduct>
