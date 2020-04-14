import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { ApolloProvider } from "react-apollo";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";

import client from "./services/apollo";
import routes from "./routes";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk.withExtraArgument(client))
    : composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client)))
);

const render = Routes => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
      </ApolloProvider>
    </Provider>,
    document.getElementById("root")
  );
};

loadableReady(() => {
  render(routes);
});