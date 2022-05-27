import "./Edit.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import * as productService from "../../../services/productService.js";
import { useEffect, useState } from "react";

export default function Edit() {
	const [product, setProduct] = useState({});
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		productService.getSingleProduct(id).then((productData) => {
			setProduct(productData);
		});
	}, []);

	const editProductHandler = (e) => {
		e.preventDefault();

		const productData = Object.fromEntries(new FormData(e.target));

		productService
			.editProduct(id, { ...productData })
			.then(() => navigate("/"))
			.catch((err) => console.log(err));
	};

	return (
		<div className="edit-page-wrapper">
			<div className="edit-wrapper">
				<form className="edit-form" method="POST" onSubmit={editProductHandler}>
					<h2 className="edit-form-heading">Edit product</h2>
					<label className="edit-from-label" htmlFor="name">
						Product name
					</label>
					<input className="edit-form-input" type="text" name="name" defaultValue={product.name} />
					<label className="edit-from-label" htmlFor="quantity">
						Quantity
					</label>
					<input className="edit-form-input" type="number" name="quantity" defaultValue={product.quantity} />
					<label className="edit-from-label" htmlFor="price">
						Price
					</label>
					<input className="edit-form-input" type="number" name="price" defaultValue={product.price} />
					<label className="edit-from-label" htmlFor="imgUrl">
						Image
					</label>
					<input className="edit-form-input" type="text" name="imgUrl" defaultValue={product.imgUrl} />
					<label className="edit-from-label" htmlFor="description">
						Description
					</label>
					<textarea name="description" rows="7" defaultValue={product.description}></textarea>
					<div className="edit-button-wrapper">
						<input className="edit-button" type="submit" value="Edit" />
						<Link className="edit-button" to="/products">
							Cancel
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
