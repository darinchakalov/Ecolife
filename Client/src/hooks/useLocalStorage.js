import { useState } from "react";
import * as notificationService from "../services/notificationService.js";

export default function useLocalStorage(key, initialValue) {
	const [state, setState] = useState(() => {
		try {
			let item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			notificationService.fail(error);
			return initialValue;
		}
	});

	const setItem = (value) => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			setState(value);
		} catch (error) {
			notificationService.fail(error);
		}
	};

	return [state, setItem];
}
