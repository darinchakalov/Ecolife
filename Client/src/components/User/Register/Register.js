import * as authSerivce from "../../../services/authSerivce.js";
import { useAuthContext } from "../../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

import * as notificationService from "../../../services/notificationService.js";

import "./Register.css";
import { useState } from "react";

let emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function Register() {
	const [errors, setErrors] = useState({
		username: { show: false, name: "" },
		email: { show: false, name: "" },
		password: { show: false, name: "" },
		rePass: { show: false, name: "" },
	});
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

		if (username.length < 4 || !emailValidationRegex.test(email) || password.length < 6 || password !== rePass) {
			return notificationService.warning("Please fill all inputs correctly");
		}

		authSerivce
			.register(username, email, password, rePass)
			.then(
				(userData) => login(userData),
				navigate("/"),
				notificationService.success("Registrations successful!")
			)
			.catch((err) => {
				notificationService.fail("Registration failed: " + err);
			});
	};

	const onChangeHandler = (e) => {
		if (e.target.name === "username") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					username: { show: true, name: "The field is mandatory" },
				}));
			} else if (e.target.value.length <= 3) {
				setErrors((state) => ({
					...state,
					username: { show: true, name: "Username should be at least 4 characters long" },
				}));
			} else {
				setErrors((state) => ({ ...state, username: { show: false, name: false } }));
			}
		} else if (e.target.name === "email") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					email: { show: true, name: "The field is mandatory" },
				}));
			} else if (!emailValidationRegex.test(e.target.value)) {
				setErrors((state) => ({ ...state, email: { show: true, name: "Please use a valid email address" } }));
			} else {
				setErrors((state) => ({ ...state, email: { show: false, name: "" } }));
			}
		} else if (e.target.name === "password") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					password: { show: true, name: "The field is mandatory" },
				}));
			} else if (e.target.value.length <= 5) {
				setErrors((state) => ({
					...state,
					password: { show: true, name: "Password should be more than 5 characters" },
				}));
			} else {
				setErrors((state) => ({
					...state,
					password: { show: false, name: "" },
				}));
			}
		} else if (e.target.name === "rePass") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					rePass: { show: true, name: "The field is mandatory" },
				}));
			} else if (passwordInput.password !== passwordInput.confirmPassword) {
				setErrors((state) => ({ ...state, rePass: { show: true, name: "Password don't match" } }));
			} else {
				setErrors((state) => ({ ...state, rePass: { show: false, name: "" } }));
			}
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
							onKeyUp={onChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.username.show}>
							{errors.username.name}
						</Alert>
						<label htmlFor="email">Email</label>
						<input
							className="form-input"
							type="text"
							name="email"
							placeholder="ivan@abv.bg"
							onKeyUp={onChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.email.show}>
							{errors.email.name}
						</Alert>
						<label htmlFor="password">Password</label>
						<input
							className="form-input"
							type="password"
							name="password"
							placeholder="******"
							onChange={onPasswordChange}
							onKeyUp={onChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.password.show}>
							{errors.password.name}
						</Alert>
						<label htmlFor="rePass">Repeat Password</label>
						<input
							className="form-input"
							type="password"
							name="rePass"
							placeholder="*******"
							onChange={onPasswordChange}
							onKeyUp={onChangeHandler}
						/>
						<Alert className="contact-form-alert" variant="danger" show={errors.rePass.show}>
							{errors.rePass.name}
						</Alert>
						<input className="register-button" type="submit" value="Register" />
					</form>
				</div>
			</div>
		</div>
	);
}
