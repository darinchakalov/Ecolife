import "./ContactForm.css";

export default function ContactForm() {
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
				<form className="contact-form">
					<label htmlFor="name">Name</label>
					<input type="name" name="" placeholder="Ivan" />
					<label htmlFor="email">Email</label>
					<input type="email" name="" placeholder="ivan@abv.bg" />
					<label htmlFor="message">Message</label>
					<textarea name="message" rows="10" cols=""></textarea>
					<button className="submit-button" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
