import { Link } from "react-router-dom";

import "./Product.css";

export default function Product({ product }) {
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
				<div className="hidden-button">
					<Link className="product-details-button" to={`/products/${product._id}`}>
						Add to cart
					</Link>
				</div>
			</div>
		</div>
	);
}
