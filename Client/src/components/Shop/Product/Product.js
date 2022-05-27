import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext.js";

import "./Product.css";

export default function Product({ product }) {
	const { user } = useAuthContext();

	const addToCartHandeler = (id) => {
		console.log(product._id);
	};



	const hiddenButton = (
		<div className="hidden-button">
			<button className="product-details-button" type="button" onClick={addToCartHandeler}>
				ADD TO CART
			</button>
		</div>
	);

	return (
		<div id="product-wrapper" className="product-wrapper">
			<div className="product-image-wrapper">
				<img src={product.imgUrl} alt="product" />
				<Link to={`/products/${product._id}`}>
					<div className="hidden-magnifing-glass">
						<i className="fa-solid fa-magnifying-glass"></i>
					</div>
				</Link>
			</div>
			<div className="product-info-wrapper">
				<h5>{product.name}</h5>
				<p className="product-price">Price ${product.price}</p>
				{user.isAdmin ? hiddenButton : ""}
			</div>
		</div>
	);
}
