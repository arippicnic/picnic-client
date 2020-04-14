import React, { memo } from "react";
import { Helmet } from "react-helmet";

import { template, organisms, molecules, atoms } from "../../components";

export const Home = () => {
	return (
		<template.container>
			<Helmet title="Home" />
			<organisms.header>
				<atoms.logo />
				<molecules.navLink>
					<li>link</li>
					<li>
						<atoms.userImage />
						<span>Jonas</span>
					</li>
				</molecules.navLink>
			</organisms.header>
		</template.container>
	);
};

export default memo(Home);
