import { Link } from "react-router-dom";
import "./ThreeGrid.css";

export default function ThreeGrid() {
	return (
		//TODO each link to different product
		<div className="grid-container">
			<div className="big-left-grid grid-box">
				<Link to="/shop">
					<img src="/images/threeGrid/1_3.jpg" alt="" />
				</Link>
			</div>
			<div className="top-right-grid grid-box">
				<Link to="/shop">
					<img src="/images/threeGrid/2_3.jpg" alt="" />
				</Link>
			</div>
			<div className="bottom-right-grid grid-box">
				<Link to="/shop">
					<img src="/images/threeGrid/3_3.jpg" alt="" />
				</Link>
			</div>
		</div>
	);
}
