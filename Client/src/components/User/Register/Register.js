import * as authSerivce from "../../../services/authSerivce.js";
import { useAuthContext } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

import "./Register.css";

export default function Register() {
	const { login } = useAuthContext();

	const navigate = useNavigate();

	const registerHandler = (e) => {
		e.preventDefault();

		let { username, email, password, rePass } = Object.fromEntries(new FormData(e.target));

		authSerivce
			.register(username, email, password, rePass)
			.then((userData) => login(userData), navigate("/"))
			.catch((err) => console.log(err));
	};

	return (
		<div className="register-page-wrapper">
			<div className="register-content-wrapper">
				<div className="register-image-wrapper">
					<img src="/images/user/login-register.png" alt="user register" />
				</div>
				<div className="register-form-wrapper">
					<h3>Create your new account</h3>
					<form className="register-form" method="POST" onSubmit={registerHandler}>
						<label htmlForm="username">Username</label>
						<input className="form-input" type="text" name="username" placeholder="codemonkey12" />
						<label htmlForm="email">Email</label>
						<input className="form-input" type="text" name="email" placeholder="ivan@abv.bg" />
						<label htmlForm="password">Password</label>
						<input className="form-input" type="password" name="password" placeholder="******" />
						<label htmlForm="rePass">Repeat Password</label>
						<input className="form-input" type="password" name="rePass" placeholder="*******" />
						<input className="register-button" type="submit" value="Register" />
					</form>
				</div>
			</div>
		</div>
	);
}