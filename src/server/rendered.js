import path from "path";
import React from "react";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";

export default (staticContext, req, routes, store, client) => {
  const statsFile = path.resolve(
    process.cwd(),
    "build/public/loadable-stats.json"
  );
  const extractor = new ChunkExtractor({ statsFile });
  const App = (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ChunkExtractorManager extractor={extractor}>
          <StaticRouter location={req.path} context={staticContext}>
            {renderRoutes(routes)}
          </StaticRouter>
        </ChunkExtractorManager>
      </ApolloProvider>
    </Provider>
  );
  const htmlContent = renderToString(App);
  const head = Helmet.renderStatic();
  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        <!-- Insert bundled styles into <link> tag -->
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="root">${htmlContent}</div>
        <script>
          window.__INITIAL_STATE__ = ${serialize(store.getState())}
        </script>
        <script>
          window.__APOLLO_STATE__ = ${serialize(client.extract())}
        </script>
        ${extractor.getScriptTags()}
        ${head.script.toString()}
      </body>
    </html>
  `;
  return html;
};
