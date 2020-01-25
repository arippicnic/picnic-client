import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchFeed } from "../../actions";

const ListPage = ({ auth, post, fetchFeed }) => {
	useEffect(() => {
		fetchFeed();
	}, []);
	return (
		<div>
			<Helmet title="List" />
			{auth ? post.map(a => <ul key={a.id}><li>{a.body}</li></ul>) : "you must signIn"}
		</div>
	);
};
function mapStateToProps({ post, auth }) {
	return { post, auth };
}
export default connect(
	mapStateToProps,
	{ fetchFeed }
)(ListPage);
