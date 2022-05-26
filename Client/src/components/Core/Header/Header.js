import { Link, NavLink } from "react-router-dom";
import { Dropdown, NavItem } from "react-bootstrap";
import "./Header.css";
import { useAuthContext } from "../../../context/AuthContext.js";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
	const { user, logout } = useAuthContext();

	const logoutHandler = () => {
		logout();
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
			<NavLink to="/cart">
				<Badge badgeContent={4} color="primary">
					<ShoppingCartIcon className="shopping-cart" color="action" />
				</Badge>
			</NavLink>
			<Dropdown as={NavItem}>
				<Dropdown.Toggle className="drop-down-button">
					<i className="fa-solid fa-user"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item as={Link} to="/profile">
						Profile
					</Dropdown.Item>
					<Dropdown.Item as={Link} to="/products/create">
						Add products
					</Dropdown.Item>
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
						to="/about"
						style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
					>
						About
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
				</section>
				<section className="user-navbar">{user.email ? loggedInUserNavigation : guestNavigation}</section>
			</nav>
		</header>
	);
}
