import { useEffect, useState } from "react";
import * as productService from "../../../services/productService.js";
import Product from "../Product/Product.js";

import "./Products.css";

export default function Shop() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		productService
			.getAllProducts()
			.then((productsData) => {
				setProducts(productsData);
			})
			.catch((err) => console.log(err));
	}, []);

	const haveProducts = products.map((product) => <Product key={product._id} product={product}></Product>);

	const noProducts = <h2>no products</h2>;

	return (
		<div className="shop-page-wrapper">
			<div className="shop-page-header">
				<h2>Fresh Food</h2>
			</div>
			<div className="shop-page-products-wrapper">{products ? haveProducts : noProducts}</div>
		</div>
	);
}
