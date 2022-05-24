import * as authSerivce from "../../../services/authSerivce.js";

import "./Register.css";

export default function register() {
	const registerHandler = (e) => {
		e.preventDefault();

		let formData = Object.fromEntries(new FormData(e.target));

		authSerivce
			.register(formData.username, formData.email, formData.password, formData.rePass)
			.then((responce) => console.log(responce))
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
						<input type="text" name="username" placeholder="codemonkey12" />
						<label htmlForm="email">Email</label>
						<input type="text" name="email" placeholder="ivan@abv.bg" />
						<label htmlForm="password">Password</label>
						<input type="password" name="password" placeholder="******" />
						<label htmlForm="rePass">Repeat Password</label>
						<input type="password" name="rePass" placeholder="*******" />
						<input className="register-button" type="submit" value="Register" />
					</form>
				</div>
			</div>
		</div>
	);
}
