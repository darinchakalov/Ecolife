import Carousel from "./Carousel/Carousel.js";
import ThreeGrid from "./ThreeGrid/ThreeGrid.js";

export default function Home() {
	return (
		<div className="home-wrapper">
			<Carousel />;
			<ThreeGrid />
		</div>
	);
}
