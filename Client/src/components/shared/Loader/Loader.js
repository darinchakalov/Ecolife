import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";

export default function Loader() {
	return (
		<div className="spinner-container">
			<div className="loading-spinner"></div>
		</div>
	);
}
