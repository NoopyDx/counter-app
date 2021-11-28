import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./nav_comp/nav";
import { Routes, Route, Link, Router, BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="about" element={<Nav />} />
			</Routes>
		</div>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
