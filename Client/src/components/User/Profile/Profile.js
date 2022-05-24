import { useAuthContext } from "../../../context/AuthContext.js";
import { Link } from "react-router-dom";

import "./Profile.css";

export default function Profile() {
	const { user } = useAuthContext();

	const adminButtons = (
		<div class="profile-button-wrapper">
			<Link to="/products/create">Create new product</Link>
			<Link to="/products">View created products</Link>
		</div>
	);

	const customerButtons = (
		<div class="profile-button-wrapper">
			<Link to="/products">Shop now</Link>
			<Link to="/products/cart">View cart</Link>
		</div>
	);

	return (
		<div className="profile-page-wrapper">
			<div class="profile-wrapper">
				<div class="profile-img-wrapper">
					<img src="/images/user/profile-icon.png" alt="" />
				</div>
				<div class="profile-data-wrapper">
					<h2>{user.username}`s account</h2>
					<p>You have created {user.products.length} products.</p>
					{user.isAdmin ? <p>Account type: Admin</p> : <p>Account type: Customer</p>}

					{user.isAdmin ? adminButtons : customerButtons}
				</div>
			</div>
		</div>
	);
}
