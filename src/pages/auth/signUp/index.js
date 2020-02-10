import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Mutation, ApolloConsumer } from "react-apollo";
import { Container, Row, Col, Input, Form, Button } from "reactstrap";

import { REGISTER_USER_MUT } from "../../../graphql/mutations";
import { registerUser } from "../../../actions";

const SignUp = ({ registerUser }) => {
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

	const handleSubmit = signUp => async e => {
		e.preventDefault();
		const { email, password } = uValue;
		await signUp({
			variables: {
				email,
				password
			}
		});
	};
	const formData = signUp => {
		return (
			<form onSubmit={handleSubmit(signUp)}>
				<label>email</label>
				<input name="email" onChange={asdf} />
				<label>password</label>
				<input name="password" onChange={asdf} />
				<Button color="primary" type="submit">
					submit
				</Button>
			</form>
		);
	};
	return (
		<div>
			<Helmet title="SignUp" />
			<ApolloConsumer>
				{client => (
					<Mutation
						mutation={REGISTER_USER_MUT}
						onCompleted={({ signUp }) => {
							registerUser({ signUp });
						}}
					>
						{(signUp, { loading, error }) => {
							if (error) {
								console.log(error);
								return "error";
							}
							return <div>{formData(signUp)}</div>;
						}}
					</Mutation>
				)}
			</ApolloConsumer>
		</div>
	);
};

export default connect(
	undefined,
	{ registerUser }
)(SignUp);
