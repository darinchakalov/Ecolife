import { createContext, useContext, useReducer, useEffect } from "react";

import * as notificationService from "../services/notificationService.js";

export const ProductContext = createContext();

const initiatalStateHandler = () => {
	if (localStorage.getItem("store")) {
		if (JSON.parse(localStorage.getItem("store")).items.length > 0) {
			let storageData = JSON.parse(localStorage.getItem("store"));
			return { items: storageData.items, counter: storageData.counter };
		} else {
			return { items: [], counter: 0 };
		}
	} else {
		return { items: [], counter: 0 };
	}
};

const initialState = initiatalStateHandler();

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_NEW_PRODUCT":
			if (!state.items.some((e) => e.product._id === action.payload._id)) {
				return {
					...state,
					items: [...state.items, { product: action.payload, productCount: action.quantity }],
					counter: state.counter + action.quantity,
				};
			} else {
				return {
					...state,
					items: state.items.map((x) =>
						x.product._id === action.payload._id
							? { product: x.product, productCount: x.productCount + 1 }
							: { product: x.product, productCount: x.productCount }
					),
					counter: state.counter + action.quantity,
				};
			}
		case "REMOVE_PRODUCT":
			return {
				...state,
				items: [...state.items.filter((product) => product !== action.payload)],
				counter: state.counter - action.payload.productCount,
			};
		case "EMPTY_CART":
			return { ...state, items: [], counter: 0 };
		case "GET_COUNTER":
			return state;
		default:
			return state;
	}
};

export const ProductProvider = ({ children }) => {
	const [products, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		try {
			localStorage.setItem("store", JSON.stringify(products));
		} catch (error) {
			notificationService.fail(error);
		}
	}, [products]);

	const addProduct = (product, quantity) => {
		dispatch({
			type: "ADD_NEW_PRODUCT",
			payload: product,
			quantity: quantity,
		});
		try {
			localStorage.setItem("store", JSON.stringify(products));
		} catch (error) {
			notificationService.fail(error);
		}
	};

	const removeProduct = (product) => {
		dispatch({
			type: "REMOVE_PRODUCT",
			payload: product,
		});
		try {
			localStorage.setItem("store", JSON.stringify(products));
		} catch (error) {
			notificationService.fail(error);
		}
	};

	const emptyCart = () => {
		dispatch({
			type: "EMPTY_CART",
		});
		try {
			localStorage.setItem("store", JSON.stringify({ items: [], counter: 0 }));
		} catch (error) {
			notificationService.fail(error);
		}
	};

	const getProductCount = () => {
		dispatch({
			type: "GET_COUNTER",
		});
	};

	return (
		<ProductContext.Provider value={{ products, addProduct, removeProduct, emptyCart, getProductCount }}>
			{children}
		</ProductContext.Provider>
	);
};

export const useProductContext = () => {
	const productState = useContext(ProductContext);
	return productState;
};
