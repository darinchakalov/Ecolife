import { Navigate } from "react-router-dom";

export function isLoggedInUser(Component) {
	function WrapperComponent(props) {
		const user = JSON.parse(localStorage.getItem("user"));

		return user.email || user !== null ? <Navigate to="/" /> : <Component {...props} />;
	}

	return WrapperComponent;
}
