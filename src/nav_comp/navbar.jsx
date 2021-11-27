import React, { Component } from "react";
import "./navbar.css";

class NavbarC extends React.Component {
	render() {
		return (
			<div>
				<nav class="navbar">
					<span class="navbar-brand mb-0 h1 toudou" style={{ color: "purple" }}>
						Navbar
					</span>
					<span class="toudou" style={{ color: "green", textAlign: "center" }}>
						2
					</span>
				</nav>
			</div>
		);
	}
}

export default NavbarC;
