import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/ProductContext.js";

import "./Cart.css";
import CartProduct from "./CartProduct/CartProduct.js";

export default function Cart() {
	const { products, emptyCart } = useProductContext();

	const emptyCartHandler = () => {
		emptyCart();
	};

	const noProductsView = (
		<div className="no-products">
			<div className="empty">
				<i className="fa-solid fa-cart-shopping"></i> Your cart is currently empty.
			</div>
			<Link to="/products">Return to shop</Link>
		</div>
	);

	const productView = (
		<div className="hasProducts">
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{products.items.map((x) => (
						<CartProduct key={x.product._id} product={x}></CartProduct>
					))}
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>Total: </td>
					</tr>
				</tbody>
			</table>
			<div className="cart-button-wrapper">
				<div className="cart-buttons">
					<Link className="cart-button" to="/products">
						Continue shopping
					</Link>
					<button className="cart-button empty-cart" onClick={emptyCartHandler}>
						Empty cart
					</button>
				</div>
				<div className="finish-button">
					<button className=" cart-button finish">Finish order</button>
					{/* <Link className="finish">Finish order</Link> */}
				</div>
			</div>
		</div>
	);

	return (
		<div className="cart-page-wrapper">
			<h1>CART</h1>
			<div>{products.items.length > 0 ? productView : noProductsView}</div>
		</div>
	);
}
