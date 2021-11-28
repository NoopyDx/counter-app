import React, { Component } from "react";
import "./nav.css";
import Background from "../assets/964x.jpg";
import NavbarC from "./navbar";
import CardForm from "../cardForm";

class Nav extends React.Component {
	render() {
		return (
			<div
				className="fullbg"
				style={{
					// backgroundColor: "blue",
					backgroundPosition: "top",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* <NavbarC /> */}
				<CardForm />
			</div>
		);
	}
}

export default Nav;
