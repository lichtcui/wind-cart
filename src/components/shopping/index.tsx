import { useSelector } from "@store/main"
import { Dropdown, Menu } from "antd"
import { count } from "d3"
import React, { useState } from "react"
import CartProduct from "./cart-product"
import Products from "./products"
import { IProduct } from "./products/product.type"
import "./style.scss"

const Shopping = () => {
	const [visible, setVisible] = useState(false)
	const handleVisibleChange = () => setVisible(prev => !prev)

	const cartProducts: IProduct[] = useSelector(state => state.cart)

	const handleCount = () => {
		const count = cartProducts.reduce((prev: number, next: IProduct) => {
			return prev + next.price * next.count
		}, 0)
		console.log(count)
	}

	const menu = (
		<Menu>
			{cartProducts.map((i: any) => (
				<Menu.Item key={`${i.id}${i.text}`}>
					<CartProduct product={i} />
				</Menu.Item>
			))}

			<Menu.Divider />
			<Menu.Item key="buy" onClick={handleCount}>
				购买
			</Menu.Item>
		</Menu>
	)

	return (
		<React.Fragment>
			<div className="header">
				<div className="title">购物天堂</div>
				<Dropdown
					overlay={menu}
					trigger={["click"]}
					onVisibleChange={handleVisibleChange}
					visible={visible}>
					<a
						className="ant-dropdown-link btn"
						onClick={e => e.preventDefault()}>
						购物车
					</a>
				</Dropdown>
			</div>
			<div className="products">
				<Products />
			</div>
		</React.Fragment>
	)
}

export default Shopping
