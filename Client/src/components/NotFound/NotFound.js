import { Link } from "react-router-dom";

import "./NotFound.css";

export default function NotFound() {
	return (
		<div className="not-found-page-wrapper">
			<h1>404</h1>
			<p>Sorry, we can't find that page! Don't worry though, everything is STILL AWESOME!</p>
			<Link className="not-found-button" to="/products">
				Go to our shop page
			</Link>
		</div>
	);
}
