import { removeProduct } from "@store/cart"
import { useDispatch } from "@store/main"
import React, { FC } from "react"
import { IProduct } from "../products/product.type"
import "./style.scss"

const CartProduct: FC<{ product: IProduct }> = ({ product }) => {
	const dispatch = useDispatch()
	const remove = () => dispatch(removeProduct(product.id))

	return (
		<div className="cart-product">
			<div className="cart-content">{product.text}</div>

			<div className="cart-actions">
				<div>{`${product.price}*${product.count}`}</div>
				<button className="cart-btn" onClick={remove}>
					delete
				</button>
			</div>
		</div>
	)
}

export default CartProduct
