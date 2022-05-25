import { Link, useNavigate } from "react-router-dom";
import * as productService from "../../../services/productService.js";

import "./Create.css";

export default function Create() {
	const navigate = useNavigate();

	const createProductHandler = (e) => {
		e.preventDefault();

		const productData = Object.fromEntries(new FormData(e.target));

		productService
			.createProduct({ ...productData })
			.then(() => navigate("/"))
			.catch((err) => console.log(err));
	};

	return (
		<div className="create-page-wrapper">
			<div className="create-wrapper">
				<h2>Create a new product</h2>
				<form className="create-form" method="POST" onSubmit={createProductHandler}>
					<label className="create-from-label" for="name">
						Product name
					</label>
					<input className="create-form-input" type="text" name="name" placeholder="Bio fruit juice" />
					<label className="create-from-label" for="quantity">
						Quantity
					</label>
					<input className="create-form-input" type="number" name="quantity" placeholder="8" />
					<label className="create-from-label" for="price">
						Price
					</label>
					<input className="create-form-input" type="number" name="price" placeholder="12.55" />
					<label className="create-from-label" for="imgUrl">
						Image
					</label>
					<input className="create-form-input" type="text" name="imgUrl" />
					<label className="create-from-label" for="description">
						Description
					</label>
					<textarea name="description" rows="7"></textarea>
					<div className="create-button-wrapper">
						<input className="create-button" type="submit" value="Create" />
						<Link className="create-button" to="/products">
							Cancel
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
