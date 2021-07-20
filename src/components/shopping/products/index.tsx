import React from "react"
import Product from "./product"
import { IProduct } from "./product.type"

const Products = () => {
	const data: IProduct[] = [
		{
			id: 0,
			text: "苹果",
			price: 10.99,
			added: false,
			count: 0,
			imageSrc:
				"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.pcswz.cn%2Fnews%2F2017%2F0102%2Fd7c0d33c36bc61ca.jpg&refer=http%3A%2F%2Fp1.pcswz.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629349936&t=acfe45b06a67c3f42b0eeae83b5ac8ad",
		},
		{
			id: 1,
			text: "香蕉",
			price: 20.99,
			added: false,
			count: 0,
			imageSrc:
				"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotocdn.sohu.com%2F20150730%2Fmp24931503_1438223553769_9.jpeg&refer=http%3A%2F%2Fphotocdn.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629349970&t=c1db470a644cfe12f8ef8f6719666b08",
		},
		{
			id: 2,
			text: "菠萝",
			price: 20.99,
			added: false,
			count: 0,
			imageSrc:
				"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20130929%2F20130929132513-1519591140.jpg&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629349985&t=15a38148fd8d2e99c09daaa1d5cc2245",
		},
	]

	return (
		<React.Fragment>
			{data.map((i: any) => (
				<Product key={i.id} product={i} />
			))}
		</React.Fragment>
	)
}

export default Products
