import { cartReducer } from "@store/cart"
import { combineReducers } from "redux"
import { todoReducer } from "../todo"

export const rootReducer = combineReducers({
	todo: todoReducer,
	cart: cartReducer,
})
