import { createContext, useContext, useReducer } from "react";
export const ProductContext = createContext();

const initialState = {
	items: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_NEW_PRODUCT":
			return { ...state, items: [...state.items, { product: action.payload, productCount: action.quantity }] };
		case "REMOVE_PRODUCT":
			return state.items.filter((product) => product !== action.payload);

		default:
			return state;
	}
};

export const ProductProvider = ({ children }) => {
	const [products, dispatch] = useReducer(reducer, initialState);

	const addProduct = (product, quantity) => {
		dispatch({
			type: "ADD_NEW_PRODUCT",
			payload: product,
			quantity: quantity,
		});
	};

	const removeProduct = (product) => {
		dispatch({
			type: "REMOVE_PRODUCT",
			payload: product,
		});
	};

	return (
		<ProductContext.Provider value={{ products, addProduct, removeProduct }}>{children}</ProductContext.Provider>
	);
};

export const useProductContext = () => {
	const productState = useContext(ProductContext);
	return productState;
};
