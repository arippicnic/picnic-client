import React, { useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Button } from "reactstrap"

import { createPost } from "../../actions";

const Page = ({ createPost }) => {
	const [uValue, setValue] = useState("");
	const hendleChange = ev => {
		setValue(ev.target.value);
	};
	const handleSubmit = async ev => {
		ev.preventDefault();
		await createPost(uValue);
	};
	return (
		<div>
			<Helmet title="New Post" />
			<form onSubmit={handleSubmit}>
				<input name="datar" onChange={hendleChange} />
				<Button color="primary" type="submit">submit</Button>
			</form>
		</div>
	);
};

export default connect(
	undefined,
	{ createPost }
)(Page);
