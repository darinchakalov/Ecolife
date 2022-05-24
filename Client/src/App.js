import { Route, Routes } from "react-router-dom";
import Header from "./components/Core/Header/Header.js";
import Footer from "./components/Core/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import Contacts from "./components/Contacts/Contacts.js";
import Login from "./components/User/Login/Login.js";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Header />

			<main className="site-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;
