import { Link, NavLink, useNavigate } from "react-router-dom";
import { Dropdown, NavItem } from "react-bootstrap";

import { useAuthContext } from "../../../context/AuthContext.js";
import { useProductContext } from "../../../context/ProductContext.js";
import * as notificationService from "../../../services/notificationService.js";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import "./Header.css";

export default function Header() {
	const { user, logout } = useAuthContext();
	const { products } = useProductContext();
	const navigate = useNavigate();

	let counter = products.counter;

	const logoutHandler = () => {
		logout();
		navigate("/");
		notificationService.success("Logged out successfully");
	};

	let activeNavStyle = {
		borderBottom: "3px solid white",
	};

	let guestNavigation = (
		<div id="guest">
			<NavLink
				className="nav-button"
				to="/login"
				style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
			>
				Login
			</NavLink>
			<NavLink
				className="nav-button"
				to="/register"
				style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
			>
				Register
			</NavLink>
		</div>
	);

	let loggedInUserNavigation = (
		<div id="user">
			{!user.isAdmin ? (
				<NavLink to="/cart">
					<Badge badgeContent={counter} color="primary">
						<ShoppingCartIcon className="shopping-cart" color="action" />
					</Badge>
				</NavLink>
			) : (
				""
			)}
			<Dropdown as={NavItem}>
				<Dropdown.Toggle className="drop-down-button">
					<i className="fa-solid fa-user"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item as={Link} to="/profile">
						Profile
					</Dropdown.Item>
					{user.isAdmin ? (
						<Dropdown.Item as={Link} to="/products/create">
							Add products
						</Dropdown.Item>
					) : (
						""
					)}
					<Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			;
		</div>
	);

	return (
		<header id="site-header">
			<nav className="navbar">
				<section className="main-navbar">
					<Link className="logo" to="/">
						<img src="/images/ecolife-logo.jpg" alt="logo" />
					</Link>
					<NavLink
						className="nav-button"
						to="/"
						style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
					>
						Home
					</NavLink>
					<NavLink
						className="nav-button"
						to="/products"
						style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
					>
						Shop
					</NavLink>
					<NavLink
						className="nav-button"
						to="/contacts"
						style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
					>
						Contact us
					</NavLink>
					<Dropdown as={NavItem} className="hidden-dropdown">
						<Dropdown.Toggle className="drop-down-button">
							<i className="fa-solid fa-bars"></i>
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item as={Link} to="/">
								Home
							</Dropdown.Item>

							<Dropdown.Item as={Link} to="/products">
								Shop
							</Dropdown.Item>

							<Dropdown.Item as={Link} to="/contacts">
								Contact us
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</section>
				<section className="user-navbar">{user.email ? loggedInUserNavigation : guestNavigation}</section>
			</nav>
		</header>
	);
}
