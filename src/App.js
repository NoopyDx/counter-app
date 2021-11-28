import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div
			className="App"
			style={{
				backgroundImage:
					"url(" +
					"https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
					")",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<header className="App-header"></header>
			<button>
				<a href="/about">GO TO ABOUT PAGE</a>
			</button>
		</div>
	);
}

export default App;
