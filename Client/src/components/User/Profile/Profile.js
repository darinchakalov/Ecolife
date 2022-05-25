import { useAuthContext } from "../../../context/AuthContext.js";
import { Link } from "react-router-dom";

import "./Profile.css";

export default function Profile() {
	const { user } = useAuthContext();

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
					{user.isAdmin ? <p>You have created {user.products.length} products.</p> : ''}
					{user.isAdmin ? <p>Account type: Admin</p> : <p>Account type: Customer</p>}

					{user.isAdmin ? adminButtons : customerButtons}
				</div>
			</div>
		</div>
	);
}
