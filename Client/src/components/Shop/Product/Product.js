import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext.js";
import Swal from "sweetalert2";

import "./Product.css";
import { useProductContext } from "../../../context/ProductContext.js";

export default function Product({ product }) {
	const { user } = useAuthContext();
	const { addProduct } = useProductContext();

	const productDetailsHandler = async () => {
		const { value: quantity } = await Swal.fire({
			showClass: {
				popup: "animate__animated animate__fadeInDown",
			},
			hideClass: {
				popup: "animate__animated animate__fadeOutUp",
			},
			title: product.name,
			text: product.description,
			input: "number",
			inputLabel: "Quantity:",
			inputValue: 1,
			inputValidator: (value) => {
				if (value > product.quantity) {
					return `Currently we have ${product.quantity} of this product in stock`;
				}
			},
			imageUrl: product.imgUrl,
			imageAlt: "product image",
			showCancelButton: true,
			cancelButtonText: "Close",
			confirmButtonColor: "#4FB68D",
			cancelButtonColor: "grey",
			confirmButtonText: "Add to cart",
			customClass: {
				image: "product-details-image",
				popup: "modal-container",
				input: "details-quantity-input",
				inputLabel: "details-quantity-label",
			},
		});

		if (Number(quantity) <= product.quantity) {
			addProduct(product, Number(quantity));
		}
	};

	const addToCartHandeler = () => {
		addProduct(product, 1);
	};

	const hiddenButton = (
		user.email? <div className="hidden-button">
			<button className="product-details-button" type="button" onClick={addToCartHandeler}>
				ADD TO CART
			</button>
		</div> : ""
		
	);

	const editButton = (
		<div className="hidden-button">
			<Link className="product-details-button edit-button-shop-page" to={`/products/edit/${product._id}`}>
				EDIT PRODUCT
			</Link>
		</div>
	);

	return (
		<div id="product-wrapper" className="product-wrapper">
			<div className="product-image-wrapper">
				<img src={product.imgUrl} alt="product" />
				<button className="hidden-magnifing-glass" type="button" onClick={productDetailsHandler}>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
				{/* <Link to={`/products/${product._id}`}>
					<div className="hidden-magnifing-glass">
						<i className="fa-solid fa-magnifying-glass"></i>
					</div>
				</Link> */}
			</div>
			<div className="product-info-wrapper">
				<h5>{product.name}</h5>
				<p className="product-price">Price ${product.price}</p>
				{!user.isAdmin ? hiddenButton : editButton}
			</div>
		</div>
	);
}
