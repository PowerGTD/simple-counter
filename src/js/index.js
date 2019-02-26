//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";
//import "./icons.js";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="banner">
			<div className="clock">
				<i className="far fa-clock" />
			</div>
			<div className="digits">{props.sixthDigit % 10}</div>
			<div className="digits">{props.fifthDigit % 10}</div>
			<div className="digits">{props.fourthDigit % 10}</div>
			<div className="digits">{props.thirdDigit % 10}</div>
			<div className="digits">{props.secondDigit % 10}</div>
			<div className="digits">{props.firstDigit % 10}</div>
		</div>
	);
}

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter);
	ReactDOM.render(
		<SimpleCounter
			firstDigit={one}
			secondDigit={two}
			thirdDigit={three}
			fourthDigit={four}
			fifthDigit={five}
			sixthDigit={six}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);

SimpleCounter.propTypes = {
	firstDigit: PropType.number,
	secondDigit: PropType.number,
	thirdDigit: PropType.number,
	fourthDigit: PropType.number,
	fifthDigit: PropType.number,
	sixthDigit: PropType.number
};
