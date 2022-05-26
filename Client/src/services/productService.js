const baseUrl = "http://localhost:3030/api";

export const createProduct = (productData) => {
	return fetch(`${baseUrl}/products`, {
		credentials: "include",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(productData),
	}).then((res) => res.json());
};

export const getAllProducts = () => {
	return fetch(`${baseUrl}/products`).then((res) => res.json());
};
