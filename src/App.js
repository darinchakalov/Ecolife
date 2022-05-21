import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer.js";

function App() {
	return (
		<div className="App">
			<Header />

			<main className="site-content">
				<Routes>
					<Route path="/" />
				</Routes>
      </main>
      
      <Footer />

		</div>
	);
}

export default App;
