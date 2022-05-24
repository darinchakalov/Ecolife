import { createContext, useContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage.js";

export const AuthContext = createContext();

const initialAuthState = {
	_id: "",
	email: "",
	username: "",
	isAdmin: false,
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", initialAuthState);

	const login = (authData) => {
		setUser(authData);
	};

	const logout = () => {
		setUser(initialAuthState);
	};

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	const authState = useContext(AuthContext);

	return authState;
};
