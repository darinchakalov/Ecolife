import "./ContactForm.css";
import * as notificationService from "../../../services/notificationService.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/0ffa3500-f4b0-11ec-95d6-ef970076a4ff";

export default function ContactForm() {
	const [errors, setErrors] = useState({ name: false, type: null });
	let navigate = useNavigate();

	const onNameChangeHandler = (e) => {
		if (!e.target.value) {
			setErrors((state) => ({ ...state, name: "The field is required", type: "name" }));
		} else if (e.target.value.length <= 3) {
			setErrors((state) => ({ ...state, name: "Name should be more than 3 characters", type: "name" }));
		} else if (e.target.value.length > 12) {
			setErrors((state) => ({ ...state, name: "Name should be less than 12 characters" }));
		} else {
			setErrors((state) => ({ ...state, name: false, type: null }));
		}
	};

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

	const onMessageChangeHandler = (e) => {
		if (!e.target.value) {
			setErrors((state) => ({ ...state, name: "The field is required", type: "message" }));
		} else if (e.target.value.length <= 10 && e.target.value.length > 0) {
			setErrors((state) => ({ ...state, name: "Message should be more than 10 characters", type: "message" }));
		} else if (e.target.value.length > 100) {
			setErrors((state) => ({ ...state, name: "Name should be less than 100 characters", type: "message" }));
		} else {
			setErrors((state) => ({ ...state, name: false, type: null }));
		}
	};

	const contactFormSubmitHandler = (e) => {
		e.preventDefault();

		const { name, email, message } = Object.fromEntries(new FormData(e.currentTarget));

		if (!name || !email || !message) {
			return notificationService.warning("Please fill all fields");
		} else {
			notificationService.success("Message was send successfully!");
			setTimeout(() => {
				navigate("/");
			}, 2000);
		}
	};

	return (
		<div className="contact-form-page-wrapper">
			<div className="contact-info-wrapper">
				<h2>Store Information</h2>
				<p>
					<i className="fa-solid fa-location-dot"></i> Ecolife Responsive Website
				</p>
				<p>
					<i className="fa-solid fa-phone"></i> Call us: (+800)345678
				</p>
				<p>
					<i className="fa-solid fa-envelope"></i> Email us: contacts@ecolife.f4ster.com
				</p>
			</div>
			<div className="contact-form-wrapper">
				<h2>Contact Us</h2>
				{/* <form className="contact-form" onSubmit={contactFormSubmitHandler} action={FORM_ENDPOINT}> */}
				<form className="contact-form" action={FORM_ENDPOINT} method="POST">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" placeholder="Ivan" onBlur={onNameChangeHandler} />
					<Alert className="contact-form-alert" variant="danger" show={errors.type === "name"}>
						{errors.name}
					</Alert>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="ivan@abv.bg" onBlur={onEmailChangeHandler} />
					<Alert className="contact-form-alert" variant="danger" show={errors.type === "email"}>
						{errors.name}
					</Alert>
					<label htmlFor="message">Message</label>
					<textarea
						className="contact-from-textarea"
						name="message"
						rows="10"
						cols=""
						onChange={onMessageChangeHandler}
					></textarea>
					<Alert className="contact-form-alert" variant="danger" show={errors.type === "message"}>
						{errors.name}
					</Alert>
					<input className="contact-form-submit-button" type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
}
