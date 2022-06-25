import { Navigate } from "react-router-dom";

export function isAdminUser(Component) {
	function WrapperComponent(props) {
		try {
			const user = JSON.parse(localStorage.getItem("user"));
			console.log(user);
			return user.isAdmin ? <Component {...props} /> : <Navigate to="/" />;
		} catch (error) {
			console.log(error);
			<Navigate to="/" />;
		}
	}

	return WrapperComponent;
}
