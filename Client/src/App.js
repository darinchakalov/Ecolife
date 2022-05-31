import { Route, Routes } from "react-router-dom";
import Header from "./components/Core/Header/Header.js";
import Footer from "./components/Core/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import Contacts from "./components/Contacts/Contacts.js";
import Login from "./components/User/Login/Login.js";
import Register from "./components/User/Register/Register.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext.js";
import Profile from "./components/User/Profile/Profile.js";
import Create from "./components/Shop/Create/Create.js";
import Products from "./components/Shop/Products/Products.js";
import Edit from "./components/Shop/Edit/Edit.js";
import Cart from "./components/Shop/Cart/Cart.js";

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Header />

				<main className="site-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/create" element={<Create />} />
						<Route path="/products/edit/:id" element={<Edit />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</AuthProvider>
	);
}

export default App;
