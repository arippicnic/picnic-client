import React from "react";
import loadable from "@loadable/component";

const Home = loadable(() => import("./home"), {
	fallback: "loading...."
});

export default props => <Home />;
