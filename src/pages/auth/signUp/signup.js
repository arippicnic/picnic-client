import React from "react";
import loadable from "@loadable/component";

const Page = loadable(() => import("./signup"), {
	fallback: "loading...."
});

export default props => <Page />;
