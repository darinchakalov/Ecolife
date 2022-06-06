import "./ContactForm.css";
import * as notificationService from "../../../services/notificationService.js";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
	let navigate = useNavigate();

	const contactFormSubmitHandler = (e) => {
		e.preventDefault();

		const { name, email, message } = Object.fromEntries(new FormData(e.target));

		if (name.length < 4 || name.length > 12) {
			return notificationService.warning("Name should be between 4 and 12 characters");
		}

		let emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!emailValidationRegex.test(email)) {
			return notificationService.warning("Please use a valid email address");
		}

		if (message.length < 10 || message.length > 100) {
			return notificationService.warning("The message should be between 10 and 100 characters");
		}

		notificationService.success("Message was send successfully!");
		setTimeout(() => {
			navigate("/");
		}, 2000);
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
					<i className="fa-solid fa-envelope"></i> Email us: demo@ecolife.com
				</p>
			</div>
			<div className="contact-form-wrapper">
				<h2>Contact Us</h2>
				<form className="contact-form" onSubmit={contactFormSubmitHandler}>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" placeholder="Ivan" />
					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="ivan@abv.bg" />
					<label htmlFor="message">Message</label>
					<textarea name="message" rows="10" cols=""></textarea>
					<input className="contact-form-submit-button" type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
}
