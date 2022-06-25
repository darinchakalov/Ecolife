import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

export default function ThankYou() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 5000);
	}, []);

	return (
		<div className="thank-you-page-wrapper">
			<h1>THANK YOU</h1>
			<p>The form has been submitted, you will be redirected to the home page</p>
		</div>
	);
}
