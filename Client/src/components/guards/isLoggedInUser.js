import { Navigate } from "react-router-dom";

export function isLoggedInUser(Component) {
	function WrapperComponent(props) {
		try {
			const user = JSON.parse(localStorage.getItem("user"));
			return user.email ? <Navigate to="/" /> : <Component {...props} />;
		} catch (error) {
			console.log(error);
			<Navigate to="/" />;
		}
	}

	return WrapperComponent;
}
