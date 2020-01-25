import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { Header } from "../components";

const App = ({ route }) => (
	<div>
		<Header />
		{renderRoutes(route.routes)}
	</div>
);

export default App;
