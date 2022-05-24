const baseUrl = "http://localhost:3030/api";

export const register = (username, email, password, rePass) => {
	return fetch(`${baseUrl}/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email,
			username: username,
			password: password,
			rePass: rePass,
		}),
	}).then((res) => res.json());
};

export const login = (email, password) => {
	return fetch(`${baseUrl}/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	}).then((res) => res.json());
};
