const baseUrl = "http://localhost:3030/api";

export const register = async (username, email, password, rePass) => {
	let res = await fetch(`${baseUrl}/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email,
			username: username,
			password: password,
			rePass: rePass,
		}),
	});

	let jsonRes = await res.json();

	if (res.ok) {
		return jsonRes;
	} else {
		throw jsonRes.message;
	}
};

export const login = async (email, password) => {
	let res = await fetch(`${baseUrl}/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	});

	let jsonRes = await res.json();
	if (res.ok) {
		return jsonRes;
	} else {
		throw jsonRes.message;
	}
};
