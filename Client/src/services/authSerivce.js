const baseUrl = "http://localhost:3030/api";

export const register = (username, email, password, rePass) => {
	return fetch(`${baseUrl}/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: "darin@darin.com",
			username: "darin",
			password: "123456",
			rePass: "123456",
		}),
	}).then((res) => res.json());
};
