import { addProduct } from "@store/cart"
import { useDispatch } from "@store/main"
import React, { FC } from "react"
import { IProduct } from "./product.type"
import "./style.scss"

const Product: FC<{ product: IProduct }> = ({ product }) => {
	const dispatch = useDispatch()
	const addToCart = () => dispatch(addProduct(product))

	return (
		<div>
			<div
				className="image"
				style={{ backgroundImage: `url(${product.imageSrc})` }}
			/>

			<div className="details">
				<div className="content">{product.text}</div>
				<div className="actions">
					<div>{product.price}</div>
					<button className="btn" onClick={addToCart}>
						加入购物车
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product
