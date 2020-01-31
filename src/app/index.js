import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { Header } from "../components";

import styles from "./app.scss";

const App = ({ route }) => (
	<div className={styles.app}>
		<Header />
		{renderRoutes(route.routes)}
	</div>
);

export default App;
