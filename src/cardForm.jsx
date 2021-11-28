import React, { Component } from "react";
import { useState } from "react";
import "./cardForm.css";
import axios from "axios";

function CardForm() {
	const [name, setName] = useState(""); // ''
	const [mail, setMail] = useState(""); // ''
	function sendInfo() {
		axios
			.post("https://hook.integromat.com/3w47bzchvt47sdorug53vjm6a20bnymq", {
				name: name,
				mail: mail,
			})
			.then(console.log("Huhu"));
		//   .then(res => {
		//     const persons = res.data;
		//     this.setState({ persons });
		//   })
	}
	return (
		<div class="containerq">
			<div class="fils">
				<div style={{ paddingBottom: "10px" }}>
					<b>RECEIVE MY TIPS DIRECTLY IN YOUR MAILBOX</b>
					<br />
					To receive every week in your mail box more of my tips and analysis,
					enter your name and email address
				</div>
				<div className="sdcont">
					<b>First Name</b>
					<input
						placeholder="Your First Name"
						value={name}
						onInput={(e) => setName(e.target.value)}
						type="text"
					/>
					<b>Last Name</b>
					<input
						placeholder="Your Last Name"
						value={mail}
						onInput={(e) => setMail(e.target.value)}
						type="text"
					/>
					<b>Email</b>
					<input
						placeholder="Your Email"
						value={mail}
						onInput={(e) => setMail(e.target.value)}
						type="text"
					/>
					<div className="optin">
						<span>
							<input type="checkbox" className="horns" />
						</span>
						By submitting this form you agree to receive emails from Patrick
						Mouratoglou.
					</div>

					<button onClick={sendInfo}>Receive Now</button>
				</div>
			</div>
		</div>
	);
}

export default CardForm;
