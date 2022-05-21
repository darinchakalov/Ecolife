import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Header />

			<main className="site-content">
				<Routes>
					<Route path="/" />
				</Routes>
			</main>
		</div>
	);
}

export default App;
