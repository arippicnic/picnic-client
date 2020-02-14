import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";

import { Header } from "../components";
import { fetchCurrentUser } from "../actions";

import styles from "./app.module.scss";

const App = ({ route, auth, fetchCurrentUser }) => {
	try {
		if (!auth) fetchCurrentUser();
	} catch (e) {
		console.log(e);
	}
	return (
		<div className={styles.app}>
			<Header />
			{renderRoutes(route.routes)}
		</div>
	);
};

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(
	mapStateToProps,
	{ fetchCurrentUser }
)(App);
