import { Link } from "react-router-dom";

import "./Create.css";

export default function Create() {
	return (
		<div className="create-page-wrapper">
			<div className="create-wrapper">
				<h2>Create a new product</h2>
				<form className="create-form" method="POST">
					<label for="name">Product name</label>
					<input className="create-form-input" type="text" name="name" />
					<label for="quantity">Quantity</label>
					<input className="create-form-input" type="number" name="quantity" />
					<label for="price">Price</label>
					<input className="create-form-input" type="number" name="price" />
					<label for="description">Description</label>
					<textarea name="description" rows='7'></textarea>
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
