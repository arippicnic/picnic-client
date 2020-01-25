import { FETCH_FEED } from "../graphql/querys";

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
