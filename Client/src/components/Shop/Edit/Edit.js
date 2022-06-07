import "./Edit.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

import * as productService from "../../../services/productService.js";
import * as notificationService from "../../../services/notificationService.js";

import { useEffect, useState } from "react";

const imgUrlValidator = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

export default function Edit() {
	const [errors, setErrors] = useState({
		name: { text: "", show: false },
		quantity: { text: "", show: false },
		price: { text: "", show: false },
		imgUrl: { text: "", show: false },
		description: { text: "", show: false },
	});
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

		if (
			!productData.name ||
			!productData.quantity ||
			!productData.price ||
			!productData.imgUrl ||
			!productData.description
		) {
			return notificationService.warning("All fields are mandatory");
		}

		if (
			productData.name.length < 4 ||
			productData.quantity < 1 ||
			productData.quantity > 100 ||
			productData.price < 1 ||
			!imgUrlValidator.test(
				productData.imgUrl || productData.description.length < 10 || productData.description.length > 100
			)
		) {
			return notificationService.warning("Please fill all inputs correctly");
		}

		productService
			.editProduct(id, { ...productData })
			.then(() => navigate("/products"), notificationService.success("Product edited succesfully"))
			.catch((err) => notificationService.fail(err));
	};

	const onChangeHandler = (e) => {
		if (e.target.name === "name") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					name: { show: true, text: "The field is mandatory" },
				}));
			} else if (e.target.value.length < 4) {
				setErrors((state) => ({
					...state,
					name: { show: true, text: "Product name should be at least 4 characters" },
				}));
			} else {
				setErrors((state) => ({
					...state,
					name: { show: false, text: "" },
				}));
			}
		} else if (e.target.name === "quantity") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					quantity: { show: true, text: "The field is mandatory" },
				}));
			} else if (e.target.value < 1 || e.target.value > 100) {
				setErrors((state) => ({
					...state,
					quantity: { show: true, text: "Quantity has to be between 1 and 100" },
				}));
			} else {
				setErrors((state) => ({ ...state, quantity: { show: false, text: "" } }));
			}
		} else if (e.target.name === "price") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					price: { show: true, text: "The field is mandatory" },
				}));
			} else if (e.target.value < 1) {
				setErrors((state) => ({
					...state,
					price: { show: true, text: "Price cannot be less than $1.00" },
				}));
			} else {
				setErrors((state) => ({ ...state, price: { show: false, text: "" } }));
			}
		} else if (e.target.name === "imgUrl") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					imgUrl: { show: true, text: "The field is mandatory" },
				}));
			} else if (!imgUrlValidator.test(e.target.value)) {
				setErrors((state) => ({
					...state,
					imgUrl: { show: true, text: "Please use a valid image URL" },
				}));
			} else {
				setErrors((state) => ({ ...state, imgUrl: { show: false, text: "" } }));
			}
		} else if (e.target.name === "description") {
			if (!e.target.value) {
				setErrors((state) => ({
					...state,
					description: { show: true, text: "The field is mandatory" },
				}));
			} else if (e.target.value.length < 10 || e.target.value.length > 100) {
				setErrors((state) => ({
					...state,
					description: { show: true, text: "Description should be between 10 and 100 characters" },
				}));
			} else {
				setErrors((state) => ({ ...state, description: { show: false, text: "" } }));
			}
		}
	};

	return (
		<div className="edit-page-wrapper">
			<div className="edit-wrapper">
				<form className="edit-form" method="POST" onSubmit={editProductHandler}>
					<h2 className="edit-form-heading">Edit product</h2>
					<label className="edit-from-label" htmlFor="name">
						Product name
					</label>
					<input
						className="edit-form-input"
						type="text"
						name="name"
						defaultValue={product.name}
						onKeyUp={onChangeHandler}
					/>
					<Alert className="contact-form-alert" variant="danger" show={errors.name.show}>
						{errors.name.text}
					</Alert>
					<label className="edit-from-label" htmlFor="quantity">
						Quantity
					</label>
					<input
						className="edit-form-input"
						type="number"
						name="quantity"
						defaultValue={product.quantity}
						onKeyUp={onChangeHandler}
					/>
					<Alert className="contact-form-alert" variant="danger" show={errors.quantity.show}>
						{errors.quantity.text}
					</Alert>
					<label className="edit-from-label" htmlFor="price">
						Price
					</label>
					<input
						className="edit-form-input"
						type="number"
						name="price"
						defaultValue={product.price}
						onKeyUp={onChangeHandler}
					/>
					<Alert className="contact-form-alert" variant="danger" show={errors.price.show}>
						{errors.price.text}
					</Alert>
					<label className="edit-from-label" htmlFor="imgUrl">
						Image
					</label>
					<input
						className="edit-form-input"
						type="text"
						name="imgUrl"
						defaultValue={product.imgUrl}
						onKeyUp={onChangeHandler}
					/>
					<Alert className="contact-form-alert" variant="danger" show={errors.imgUrl.show}>
						{errors.imgUrl.text}
					</Alert>
					<label className="edit-from-label" htmlFor="description">
						Description
					</label>
					<textarea
						name="description"
						rows="7"
						defaultValue={product.description}
						onKeyUp={onChangeHandler}
					></textarea>
					<Alert className="contact-form-alert" variant="danger" show={errors.description.show}>
						{errors.description.text}
					</Alert>
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
