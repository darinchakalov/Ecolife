import { createContext, useContext, useReducer } from "react";
export const ProductContext = createContext();

const initiatalStateHandler = () => {
	if (localStorage.getItem("items")) {
		if (JSON.parse(localStorage.getItem("items")).items.length > 0) {
			let storageData = JSON.parse(localStorage.getItem("items"));
			return storageData.items;
		} else {
			return [];
		}
	} else {
		return [];
	}
};

const initialState = {
	items: initiatalStateHandler(),
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_NEW_PRODUCT":
			console.log(action.payload);
			console.log(state.items);
			if (!state.items.some((e) => e.product._id == action.payload._id)) {
				return {
					...state,
					items: [...state.items, { product: action.payload, productCount: action.quantity }],
				};
			} else {
				return {
					...state,
					items: state.items.map((x) =>
						x.product._id == action.payload._id
							? { product: x.product, productCount: x.productCount + 1 }
							: { product: x.product, productCount: x.productCount }
					),
				};
			}
		case "REMOVE_PRODUCT":
			return {
				...state,
				items: [...state.items.filter((product) => product !== action.payload)],
			};

		default:
			return state;
	}
};

export const ProductProvider = ({ children }) => {
	const [products, dispatch] = useReducer(reducer, initialState);

	// useEffect(() => {
	// 	localStorage.setItem("items", JSON.stringify(products));
	// }, [products]);

	const addProduct = (product, quantity) => {
		dispatch({
			type: "ADD_NEW_PRODUCT",
			payload: product,
			quantity: quantity,
		});
		localStorage.setItem("items", JSON.stringify(products));
	};

	const removeProduct = (product) => {
		dispatch({
			type: "REMOVE_PRODUCT",
			payload: product,
		});
		localStorage.setItem("items", JSON.stringify(products));
	};

	return (
		<ProductContext.Provider value={{ products, addProduct, removeProduct }}>{children}</ProductContext.Provider>
	);
};

export const useProductContext = () => {
	const productState = useContext(ProductContext);
	return productState;
};
