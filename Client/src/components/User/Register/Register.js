import "./Register.css";

export default function Login() {
	return (
		<div className="login-page-wrapper">
			<div className="login-content-wrapper">
				<div className="login-image-wrapper">
					<img src="/images/user/login-register.png" alt="user login" />
				</div>
				<div className="login-form-wrapper">
					<h3>Create your new account</h3>
					<form className="login-form">
						<label for="username">Username</label>
						<input type="text" name="username" placeholder="codemonkey12"/>
						<label for="email">Email</label>
						<input type="text" name="email" placeholder="ivan@abv.bg"/>
						<label for="password">Password</label>
						<input type="password" name="password" placeholder="******"/>
						<label for="rePass">Repeat Password</label>
						<input type="password" name="rePass" placeholder="*******"/>
						<button className="login-button" type="submit">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
