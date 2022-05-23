import "./ContactForm.css";

export default function ContactForm() {
	return (
		<div className="contact-form-wrapper">
			<div className="contact-info-wrapper">
				<h2>Store Information</h2>
				<p>
					<i class="fa-solid fa-location-dot"></i> Ecolife Responsive Website
				</p>
				<p>
					<i class="fa-solid fa-phone"></i> Call us: (+800)345678
				</p>
				<p>
					<i class="fa-solid fa-envelope"></i> Email us: demo@ecolife.com
				</p>
			</div>
			<div className="contact-from-wrapper">
				<h2>Contact Us</h2>
				<form className="contact-form">
					<label for="name">Name</label>
					<input type="name" name="" value="" />
					<label for="email">Email</label>
					<input type="email" name="" value="" />
					<label for="message">Message</label>
					<textarea name="message" rows="10" cols=""></textarea>
					<button className="submit-button" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
