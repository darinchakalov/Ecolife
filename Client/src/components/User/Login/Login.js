import "./Login.css";

export default function Login() {
	return (
		<div className="login-page-wrapper">
			<div className="login-content-wrapper">
				<div className="login-image-wrapper">
					<img src="/images/user/login-register.png" alt="user login" />
				</div>
				<div className="login-form-wrapper">
					<h3>Log into your account</h3>
					<form className="login-form">
						<label for="email">Email</label>
						<input type="text" name="email" />
						<label for="">Password</label>
						<input type="password" name="password" />
						<button className="login-button" type="submit">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
