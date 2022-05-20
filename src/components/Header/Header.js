import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
	let activeNavStyle = {
		borderBottom: "3px solid white",
	};

	let guestNavigation = (
		<div id="guest">
			<NavLink className="button" to="/login" style={({ isActive }) => (isActive ? activeNavStyle : undefined)}>
				Login
			</NavLink>
			<NavLink
				className="button"
				to="/register"
				style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
			>
				Register
			</NavLink>
		</div>
	);

	return (
		<header id="site-header">
			<nav className="navbar">
				<section className="main-navbar">
					<Link className="logo" to="/">
						<img src="/images/ecolife-logo.jpg" alt="logo" />
					</Link>
					<NavLink className="button" to="/" style={({ isActive }) => (isActive ? activeNavStyle : undefined)}>
						Home
					</NavLink>
					<NavLink
						className="button"
						to="/about"
						style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
					>
						About
					</NavLink>
					<NavLink
						className="button"
						to="/shop"
						style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
					>
						Shop
					</NavLink>
					<NavLink
						className="button"
						to="/contacts"
						style={({ isActive }) => (isActive ? activeNavStyle : undefined)}
					>
						Contact us
					</NavLink>
				</section>
				<section className="user-navbar">{guestNavigation}</section>
			</nav>
		</header>
	);
}
