import { Navigate } from "react-router-dom";

export function isUser(Component) {
	function WrapperComponent(props) {
		try {
			const user = JSON.parse(localStorage.getItem("user"));
			return user.email ? <Component {...props} /> : <Navigate to="/login" />;
		} catch (error) {
			console.log(error);
			<Navigate to="/login" />;
		}
	}

	return WrapperComponent;
}
