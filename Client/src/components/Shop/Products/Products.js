import { useContext, useEffect, useState } from "react";
import * as productService from "../../../services/productService.js";
import "./Products.css";

export default function Shop() {
	const [products, setProducts] = useState();

	useEffect(() => {
		productService
			.getAllProducts()
			.then((productsData) => {
				setProducts(productsData);
			})
			.catch((err) => console.log(err));
	}, []);

	const hasProducts = <h2>has</h2>;

	const noProducts = <h2>no products</h2>;

	return (
		<div className="shop-page-wrapper">
			<div className="shop-page-header">
				<h2>Fresh Food</h2>
			</div>
			<div className="shop-page-products-wrapper">{products ? hasProducts : noProducts}</div>
		</div>
	);
}
