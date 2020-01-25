import React, { memo } from "react";
import { Helmet } from "react-helmet";

export const Home = () => {
	return (
		<div>
			<Helmet title="Home" />
			Home Page 2
		</div>
	);
};

export default memo(Home);
