import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext.js";
import * as productService from "../../../services/productService.js";

import "./Profile.css";

export default function Profile() {
	const { user } = useAuthContext();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		productService
			.getAllProducts()
			.then((productData) => setProducts(productData))
			.catch((err) => console.log(err));
	}, []);

	const adminButtons = (
		<div className="profile-button-wrapper">
			<Link to="/products/create">Create new product</Link>
			<Link to="/products">View created products</Link>
		</div>
	);

	const customerButtons = (
		<div className="profile-button-wrapper">
			<Link to="/products">Shop now</Link>
			<Link to="/products/cart">View cart</Link>
		</div>
	);

	return (
		<div className="profile-page-wrapper">
			<div className="profile-wrapper">
				<div className="profile-img-wrapper">
					<img src="/images/user/profile-icon.png" alt="profile" />
				</div>
				<div className="profile-data-wrapper">
					<h2 className="username-header">{user.username}`s account</h2>
					{user.isAdmin ? <p>Products in the store: {products.length}</p> : ""}
					{user.isAdmin ? <p>Account type: Admin</p> : <p>Account type: Customer</p>}

					{user.isAdmin ? adminButtons : customerButtons}
				</div>
			</div>
		</div>
	);
}
