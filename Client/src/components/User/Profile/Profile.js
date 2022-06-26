import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext.js";
import * as productService from "../../../services/productService.js";
import * as notificationService from "../../../services/notificationService.js";

import "./Profile.css";
import Loader from "../../shared/Loader/Loader.js";
import { isUser } from "../../../guards/isUser.js";

function Profile() {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const { user } = useAuthContext();

	useEffect(() => {
		productService
			.getAllProducts()
			.then((productData) => {
				setProducts(productData);
				setIsLoading(false);
			})
			.catch((err) => notificationService.fail(err));
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
			{isLoading ? (
				<Loader />
			) : (
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
			)}
		</div>
	);
}

const GuardedComponent = isUser(Profile);
export default GuardedComponent;
