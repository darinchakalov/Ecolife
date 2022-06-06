import * as authSerivce from "../../../services/authSerivce.js";
import { useAuthContext } from "../../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

import * as notificationService from "../../../services/notificationService.js";

import "./Register.css";
import { useState } from "react";

export default function Register() {
	const [errors, setErrors] = useState({ name: false, type: false });
	const [passwordInput, setPasswordInput] = useState({
		password: "",
		confirmPassword: "",
	});

	const { login } = useAuthContext();

	const navigate = useNavigate();

	const registerHandler = (e) => {
		e.preventDefault();

		let { username, email, password, rePass } = Object.fromEntries(new FormData(e.target));

		if (!username || !email || !password || !rePass) {
			return notificationService.warning("All fields are mandatory!");
		}

		authSerivce
			.register(username, email, password, rePass)
			.then(
				(userData) => login(userData),
				navigate("/"),
				notificationService.success("Registrations successful!")
			)
			.catch((err) => {
				console.log(err);
				notificationService.fail("Registration failed: " + err);
			});
	};

	function onUserChangeHandler(e) {
		if (!e.target.value) {
			setErrors((state) => ({ ...state, name: "The field is required", type: "username" }));
		} else if (e.target.value.length <= 3) {
			setErrors((state) => ({ ...state, name: "Name should be more than 3 characters", type: "username" }));
		} else {
			setErrors((state) => ({ ...state, name: false, type: null }));
		}
	}

	const onEmailChangeHandler = (e) => {
		let emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!e.target.value) {
			setErrors((state) => ({ ...state, name: "The field is required", type: "email" }));
		} else if (!emailValidationRegex.test(e.target.value)) {
			setErrors((state) => ({ ...state, name: "Please use a valid email address", type: "email" }));
		} else {
			setErrors((state) => ({ ...state, name: false, type: null }));
		}
	};

	const onPasswordChange = (e) => {
		if (e.target.name === "password") {
			const newPasswordInput = { ...passwordInput, password: e.target.value };
			setPasswordInput(newPasswordInput);
		} else {
			const newPasswordInput = { ...passwordInput, confirmPassword: e.target.value };
			setPasswordInput(newPasswordInput);
		}
	};

	const onPasswordChangeHandler = (e) => {
		if (!e.target.value) {
			setErrors((state) => ({ ...state, name: "The field is required", type: "password" }));
		} else if (e.target.value.length <= 5) {
			setErrors((state) => ({ ...state, name: "Password should be more than 5 characters", type: "password" }));
		} else {
			setErrors((state) => ({ ...state, name: false, type: null }));
			// setPass((state) => ({ ...state, password: e.target.value }));
		}
	};

	const onRePassChangeHandler = (e) => {
		if (!e.target.value) {
			setErrors((state) => ({ ...state, name: "The field is required", type: "rePass" }));
		} else {
			if (passwordInput.password !== passwordInput.confirmPassword) {
				setErrors((state) => ({ ...state, name: "Password don't match", type: "rePass" }));
			} else {
				setErrors((state) => ({ ...state, name: false, type: null }));
			}
		}
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
						<label htmlFor="username">Username</label>
						<input
							className="form-input"
							type="text"
							name="username"
							placeholder="codemonkey12"
							onChange={onUserChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.type === "username"}>
							{errors.name}
						</Alert>
						<label htmlFor="email">Email</label>
						<input
							className="form-input"
							type="text"
							name="email"
							placeholder="ivan@abv.bg"
							onBlur={onEmailChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.type === "email"}>
							{errors.name}
						</Alert>
						<label htmlFor="password">Password</label>
						<input
							className="form-input"
							type="password"
							name="password"
							placeholder="******"
							onChange={onPasswordChange}
							onKeyUp={onPasswordChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.type === "password"}>
							{errors.name}
						</Alert>
						<label htmlFor="rePass">Repeat Password</label>
						<input
							className="form-input"
							type="password"
							name="rePass"
							placeholder="*******"
							onChange={onPasswordChange}
							onKeyUp={onRePassChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.type === "rePass"}>
							{errors.name}
						</Alert>
						<input className="register-button" type="submit" value="Register" />
					</form>
				</div>
			</div>
		</div>
	);
}
