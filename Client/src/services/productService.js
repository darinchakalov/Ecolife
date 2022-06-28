const baseUrl = "http://localhost:3030/api";
// const baseUrl = "https://ecolife2.fly.dev/api";

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
	const params = new URLSearchParams();
	params.append("startIndex", 0);
	params.append("limit", 10);
	console.log(`${baseUrl}/products?${params.toString()}`);
	return fetch(`${baseUrl}/products`).then((res) => res.json());
};

export const getSingleProduct = (id) => {
	return fetch(`${baseUrl}/products/${id}`).then((res) => res.json());
};

export const getPaginatedProducts = (startIndex, limit) => {
	const params = new URLSearchParams();
	params.append("startIndex", startIndex);
	params.append("limit", limit);
	return fetch(`${baseUrl}/products/list?${params.toString()}`).then((res) => res.json());
};

export const editProduct = (id, product) => {
	return fetch(`${baseUrl}/products/${id}`, {
		credentials: "include",
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	}).then((res) => res.json());
};

export const finishOrder = async (products) => {
	let res = await fetch(`${baseUrl}/products/finish`, {
		credentials: "include",
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(products),
	});

	let jsonRes = await res.json();

	if (res.ok) {
		return jsonRes;
	} else {
		throw jsonRes.message;
	}
};
