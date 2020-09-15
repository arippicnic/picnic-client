import React, { memo } from "react";
import { Helmet } from "react-helmet";

import { templates, organisms, molecules, atoms } from "../../components";

export const Home = () => {
	return (
		<templates.container container="base">
			<Helmet title="Home" />
			<organisms.header>
				<atoms.logo type="header" />
				<molecules.navLink>
					<li>link</li>
					<li>
						<atoms.userImage />
						<span>Jonas</span>
					</li>
				</molecules.navLink>
			</organisms.header>
			<organisms.content>
				<molecules.block block="1">
					<molecules.item>
						item 1
					</molecules.item>
				</molecules.block>
				<molecules.block block="2">
					<molecules.item>
						item 2
					</molecules.item>
					<molecules.item>
						item 3
					</molecules.item>
				</molecules.block>
			</organisms.content>
		</templates.container>
	);
};

export default memo(Home);
