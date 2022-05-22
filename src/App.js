import { Route, Routes } from "react-router-dom";
import Header from "./components/Core/Header/Header.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Core/Footer/Footer.js";
import Home from "./components/Home/Home.js";

function App() {
	return (
		<div className="App">
			<Header />

			<main className="site-content">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;
