import { FETCH_FEED } from "../graphql/querys";
import { CREATE_POST_MUT } from "../graphql/mutations";

export const fetchFeed = () => async (dispatch, getState, client) => {
	const queryFeed = await client.query({
		query: FETCH_FEED,
		variables: { limit: 5 }
	});
	const res = queryFeed.data.getPosts;
	dispatch({
		type: "FETCH_FEED",
		payload: res
	});
};

export const createPost = body => async (dispatch, getState, client) => {
	const { data } = await client.mutate({
		variables: { body },
		mutation: CREATE_POST_MUT
	});
	dispatch({
		type: "CREATE_POST",
		payload: [data]
	});
};
