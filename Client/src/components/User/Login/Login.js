import * as authService from "../../../services/authSerivce.js";
import { useAuthContext } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
	const { login } = useAuthContext();

	const navigate = useNavigate();

	const loginHandler = (e) => {
		e.preventDefault();

		const { email, password } = Object.fromEntries(new FormData(e.target));

		authService
			.login(email, password)
			.then((loginData) => login(loginData), navigate("/"))
			.catch((err) => console.log(err));
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
						<label for="email">Email</label>
						<input className="form-input" type="text" name="email" />
						<label for="">Password</label>
						<input className="form-input" type="password" name="password" />
						<input className="login-button" type="submit" value="Login" />
					</form>
				</div>
			</div>
		</div>
	);
}
