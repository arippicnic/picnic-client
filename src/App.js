import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";

import { fetchCurrentUser } from "./actions";

import './assets/sass/main.scss';

const App = ({ route, auth, fetchCurrentUser }) => {
    try {
        if (!auth) fetchCurrentUser();
    } catch (e) {
        
    }
    return (
        <React.Fragment>
            {renderRoutes(route.routes)}
        </React.Fragment>
    );
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps, { fetchCurrentUser })(App);
