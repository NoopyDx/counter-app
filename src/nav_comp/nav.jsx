import React, { Component } from "react";
import "./nav.css";
import Background from "../assets/bg.jpg";
import NavbarC from "./navbar";

class Nav extends React.Component {
	render() {
		return (
			<div
				className="fullbg"
				style={{
					backgroundImage: `url(${Background})`,
					backgroundColor: "blue",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}>
				<NavbarC />
			</div>
		);
	}
}

export default Nav;
