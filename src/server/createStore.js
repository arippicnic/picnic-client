import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

import reducers from "../reducers";

const { NODE_ENV } = process.env;

export default client => {
  const store = createStore(
    reducers,
    process.env.NODE_ENV === "production"
      ? applyMiddleware(thunk.withExtraArgument(client))
      : composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client)))
  )
  return store
}
