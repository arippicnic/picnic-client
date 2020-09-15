import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Button } from 'reactstrap';

import { loginUser } from "../../../actions";

import { templates, molecules, atoms } from "../../../components";

const LoginPage = ({ loginUser }) => {
	const [uValue, setValue] = useState({
		email: "",
		password: ""
	});
	const asdf = ev => {
		const { name, value } = ev.target;
		setValue({
			...uValue,
			[name]: value
		});
	};
	const handleSubmit = async ev => {
		ev.preventDefault();
		const { email, password } = uValue;
		const res = await loginUser(email, password);
	};
	return (
		<templates.container container="auth">
			<Helmet title="Login" />
			<atoms.logo className="m-5" type="auth" />
			<molecules.form onSubmit={handleSubmit}>
				<atoms.label>Email</atoms.label>
				<atoms.fild type="text" className="m-2" />
				<atoms.label>Password</atoms.label>
				<atoms.fild type="password" className="m-5" />
				<atoms.button type="submit">asdasd</atoms.button>
			</molecules.form>
		</templates.container>
	);
};

export default connect(
	undefined,
	{ loginUser }
)(LoginPage);
