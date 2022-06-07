import { useEffect, useState } from "react";
import * as productService from "../../../services/productService.js";
import * as notificationService from "../../../services/notificationService.js";
import Loader from "../../shared/Loader/Loader.js";
import Product from "../Product/Product.js";

import "./Products.css";

export default function Shop() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		productService
			.getAllProducts()
			.then((productsData) => {
				setProducts(productsData);
				setIsLoading(false);
			})
			.catch((err) => notificationService.fail(err));
	}, []);

	const haveProducts = products.map((product) => <Product key={product._id} product={product}></Product>);

	const noProducts = <h2>no products</h2>;

	return isLoading ? (
		<Loader />
	) : (
		<div className="shop-page-wrapper">
			<div className="shop-page-header">
				<h2>Fresh Food</h2>
			</div>
			<div className="shop-page-products-wrapper">{products ? haveProducts : noProducts}</div>
		</div>
	);
}
