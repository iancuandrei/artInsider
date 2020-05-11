import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mgal from "./components/MGal";
import "./App.css";
import NavBar from "./components/NavBar";

import { Switch, Route } from "react-router-dom";
import Dummy from "./components/Dummy";
import Homepage from "./components/Homepage";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />

				<Route path="/gallery" component={Mgal} />

				<Route path="/artists" component={Dummy} />

				<Route path="/contact" component={Dummy} />
			</Switch>
		</div>
	);
}

export default App;
