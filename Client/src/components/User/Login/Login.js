import * as authService from "../../../services/authSerivce.js";
import { useAuthContext } from "../../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import * as notificationService from "../../../services/notificationService.js";

import "./Login.css";
import { isLoggedInUser } from "../../guards/isLoggedInUser.js";

function Login() {
	const { login } = useAuthContext();

	const navigate = useNavigate();

	const loginHandler = (e) => {
		e.preventDefault();

		const { email, password } = Object.fromEntries(new FormData(e.target));

		authService
			.login(email, password)
			.then((loginData) => {
				login(loginData);
				navigate("/");
				notificationService.success("Login successful!");
			})
			.catch((err) => notificationService.fail("Login failed: " + err));
	};

	return (
		<div className="login-page-wrapper">
			<div className="login-content-wrapper">
				<div className="login-image-wrapper">
					<img src="/images/user/login-register.png" alt="user login" />
				</div>
				<div className="login-form-wrapper">
					<h3>Log into your account</h3>
					<form className="login-form" method="POST" onSubmit={loginHandler}>
						<label htmlFor="email">Email</label>
						<input className="form-input" type="text" name="email" />
						<label htmlFor="">Password</label>
						<input className="form-input" type="password" name="password" />
						<input className="login-button" type="submit" value="Login" />
					</form>
				</div>
			</div>
		</div>
	);
}

const GuardedComponent = isLoggedInUser(Login);
export default GuardedComponent;
