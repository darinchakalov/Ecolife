import { useProductContext } from "../../../../context/ProductContext.js";

export default function CartProduct({ product }) {
	const { removeProduct } = useProductContext();

	const removeItemFromCartHandler = () => {
		removeProduct(product);
	};

	return (
		<tr key={product.product._id}>
			<td className="cart-product-info">
				<button className="remove-item-button" onClick={removeItemFromCartHandler}>
					<i className="fa-solid fa-circle-xmark"></i>
				</button>
				<img src={product.product.imgUrl} alt="" />
				<div className="product-name">{product.product.name}</div>
			</td>

			<td>${product.product.price}</td>
			<td>{product.productCount}</td>
			<td>${product.product.price * product.productCount}</td>
		</tr>
	);
}
