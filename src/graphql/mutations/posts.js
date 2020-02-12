import gql from "graphql-tag";

export const CREATE_POST_MUT = gql`
	mutation($body: String!) {
		createPost(body: $body) {
			id
			body
		}
	}
`;
