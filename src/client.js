import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { ApolloProvider } from "react-apollo";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { renderRoutes } from "react-router-config";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";

import client from "./services/apollo";
import routes from "./routes";
import reducers from "./reducers";

// import './assets/css/bootstrap.min.css';
import './assets/sass/main.scss';

const store = createStore(
  reducers,
  window.__INITIAL_STATE__,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk.withExtraArgument(client))
    : composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client)))
);

const render = Routes => {
   const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppContainer>
          <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
        </AppContainer>
      </ApolloProvider>
    </Provider>,
    document.getElementById("root")
  );
};

loadableReady(() => {
  render(routes);
});

if (module.hot) {
  module.hot.accept("./routes", () => {
    try {
      const nextRoutes = require("./routes").default;

      render(nextRoutes);
    } catch (error) {
      console.error(error);
    }
  });
}
