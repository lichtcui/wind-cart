import { handleActions } from "redux-actions"
import {
	addProduct,
	AddProduct,
	removeProduct,
	RemoveProduct,
} from "./cart.actions"

export const cartReducer = handleActions(
	{
		[addProduct.toString()]: (state, action: AddProduct) => {
			const addedProduct = action.payload

			const currentProductIndex = state.findIndex(
				(i: any) => i.id === addedProduct.id
			)

			if (currentProductIndex >= 0) {
				state[currentProductIndex].count++
				return state
			}
			return [...state, { ...addedProduct, count: 1 }]
		},
		[removeProduct.toString()]: (state, action: RemoveProduct) => {
			const id = action.payload
			const currentProductIndex = state.findIndex((i: any) => i.id === id)

			if (state[currentProductIndex].count > 1) {
				state[currentProductIndex].count--
				return state
			}

			return state.filter((i: any) => i.id !== id)
		},
	},
	[]
)
