import React, { memo } from "react";
import { Helmet } from "react-helmet";

export default memo(({ staticContext }) => {
	if (staticContext) staticContext.status = "404";
	return (
		<div>
			<Helmet title="Not Found" />
			<p>Oops, Page was not found!</p>
		</div>
	);
});
