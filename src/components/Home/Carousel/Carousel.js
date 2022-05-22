import { Slide, Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import "./Carousel.css";

const fadeImages = [
	{
		url: "/images/slider1.jpg",
		caption: "Slide 1",
		h1: `Fresh Lemonade \n Summer Drinks`,
	},
	{
		url: "/images/slider2.jpg",
		caption: "Slide 2",
		h1: "Fresh Mango Juice Just Fruit",
	},
];

export default function Carousel() {
	// return (
	// 	<div className="slide-container">
	// 		<Slide>
	// 			{slideImages.map((slideImage, index) => (
	// 				<div className="each-slide" key={index}>
	// 					<div className="slider-div" style={{ backgroundImage: `url(${slideImage.url})` }}>
	// 						<p>100% PURE & NATURAL</p>
	// 						<h1>{slideImage.h1}</h1>
	// 						<Link className="slider-button" to="/shop">
	// 							SHOP NOW
	// 						</Link>
	// 					</div>
	// 				</div>
	// 			))}
	// 		</Slide>
	// 	</div>
	// );

	return (
		<div className="slide-container">
			<Fade>
				{fadeImages.map((fadeImage, index) => (
					<div className="each-fade" key={index}>
						<div className="slider-div" style={{ backgroundImage: `url(${fadeImage.url})` }}>
							<div className="slider-text-container">
								<p>100% PURE & NATURAL</p>
								<h1>{fadeImage.h1}</h1>{" "}
								<Link className="slider-button" to="/shop">
									SHOP NOW
								</Link>
							</div>
						</div>
					</div>
				))}
			</Fade>
		</div>
	);
}
