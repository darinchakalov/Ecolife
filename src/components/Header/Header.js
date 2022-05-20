import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	let guestNavigation = (
		<div id="guest">
			<Link className="button" to="/login">
				Login
			</Link>
			<Link className="button" to="/register">
				Register
			</Link>
		</div>
	);

	return (
		<header id="site-header">
			<nav className="navbar">
				<Link to="/">
					<img src="/images/ecolife-logo.jpg" alt="logo" />
				</Link>
				<section className="main-navbar">
					<Link className="button" to="/">
						Home
					</Link>
					<Link className="button" to="/">
						About
					</Link>
					<Link className="button" to="/">
						Shop
					</Link>
					<Link className="button" to="/">
						Contact us
					</Link>
				</section>
				<section className="user-navbar">{guestNavigation}</section>
			</nav>
		</header>
	);
}
