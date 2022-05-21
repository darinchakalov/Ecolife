import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="footer-wrapper">
				<section className="info-section">
					<Link to="/" className="footer-logo">
						<img src="/images/logo_footer.png" alt="logo" />
					</Link>
					<p>
						We are a team of designers and developers that create high quality Magento, Prestashop,
						Opencart.
					</p>
				</section>
				<section className="contacts-section">
					<div className="footer-contacts">
						<h5> Need Help</h5>
						<h4>
							<i class="fa-solid fa-phone-volume"></i>
							(+800) 345 678, (+800) 123 456
						</h4>
					</div>
					<div className="footer-social-links">
						<a href="https://facebook.com">
							<i class="fa-brands fa-facebook-f"></i>
						</a>
						<a href="https://twitter.com">
							<i class="fa-brands fa-twitter"></i>
						</a>
						<a href="https://youtube.com">
							<i class="fa-brands fa-youtube"></i>
						</a>
						<a href="https://google.com">
							<i class="fa-brands fa-google-plus-g"></i>
						</a>
						<a href="http://instagram.com">
							<i class="fa-brands fa-instagram"></i>
						</a>
					</div>
				</section>
			</div>
			<p className="copyrights">Copyright © Ecolife. All Rights Reserved</p>
		</footer>
	);
}
