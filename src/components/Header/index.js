import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions";

const Header = ({ logoutUser }) => {
	const handleLogout = async () => {
		return logoutUser();
	};
	return (
		<ul>
			<li>
				<Link to="/">Homes</Link>
			</li>
			<li>
				<Link to="/list">List</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
			<button onClick={handleLogout}>logout</button>
		</ul>
	);
};

export default connect(
	undefined,
	{ logoutUser }
)(Header);
