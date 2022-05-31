import { Link } from "react-router-dom";

import "./Cart.css";

export default function Cart() {
	const product = [
		{
			_id: { $oid: "628e81d06d265c3490aa0290" },
			name: "Product 1",
			price: 40000,
			quantity: 2,
			imgUrl: "https://static.toiimg.com/photo/msid-80850219/80850219.jpg?735181",
			description: "dasdsadas",
			userId: { $oid: "628cf8a3cd8e3a2050c19ca5" },
			created_at: { $date: { $numberLong: "1653506512927" } },
			updatedAt: { $date: { $numberLong: "1653506512927" } },
			__v: 0,
		},
	];

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
					{product.map((x) => (
						<tr key={x._id}>
							<td className="cart-product-info">
								<button className="remove-item-button">
									<i className="fa-solid fa-circle-xmark"></i>
								</button>
								<img src={x.imgUrl} alt="" />
								<div className="product-name">{x.name}</div>
							</td>

							<td></td>
							<td></td>
							<td></td>
						</tr>
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
					<button className="cart-button empty-cart" type="">
						Empty cart
					</button>
				</div>
				<div className="finish-button">
					<button className=" cart-button finish" type="">
						Finish order
					</button>
					{/* <Link className="finish">Finish order</Link> */}
				</div>
			</div>
		</div>
	);

	return (
		<div className="cart-page-wrapper">
			<h1>CART</h1>
			<div>{product.length > 0 ? productView : noProductsView}</div>
		</div>
	);
}
