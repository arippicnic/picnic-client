import React from "react";
import { Helmet } from "react-helmet";

import FormRegister from "../../../components/Form/registerForm";

const SignUp = () => {
	return (
		<div>
			<Helmet title="SignUp" />
			<FormRegister />
		</div>
	);
};

export default SignUp;
