import React from "react";
import loadable from "@loadable/component";

const Page = loadable(() => import("./login"), {
	fallback: "loading...."
});

export default props => <Page />;
