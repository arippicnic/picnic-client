import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Button } from 'reactstrap';

import { loginUser } from "../../../actions";

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
		<div>
			<Helmet title="Login" />
			<form onSubmit={handleSubmit}>
				<label>email</label>
				<input name="email" onChange={asdf} />
				<label>password</label>
				<input name="password" onChange={asdf} />
				<Button color="primary" type="submit">submit</Button>
			</form>
		</div>
	);
};

export default connect(
	undefined,
	{ loginUser }
)(LoginPage);
