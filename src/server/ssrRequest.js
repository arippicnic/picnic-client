import { matchRoutes } from "react-router-config";

import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import fetch from "node-fetch";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";

import rendered from "./rendered";
import routes from "../routes";
import useStore from "./createStore";

const { GRAPH_URL } = process.env;

export default app => {
	app.get("*", (req, res) => {
		const linkHttp = createUploadLink({
			uri: GRAPH_URL,
			credentials: "include",
			headers: {
				cookie: req.header("Cookie")
			},
			fetch
		});

		const errorLink = onError(
			({ graphQLErrors, networkError, operation, forward, response }) => {
				if (graphQLErrors) {
					console.info(graphQLErrors)
					for (let err of graphQLErrors) {
						switch (err.extensions.code) {
							case "UNAUTHENTICATED":
						}
					}
				}
			}
		);
		const loadBranchData = () => {
			const branch = matchRoutes(routes, req.path);
			const promises = branch.map(({ route, match }) => {
				return Promise.resolve(null);
			});

			return Promise.all(promises);
		};
		(async () => {
			try {
				const links = [errorLink, linkHttp];
				const link = ApolloLink.from(links);

				const client = await new ApolloClient({
					cache: new InMemoryCache({
						addTypename: false
					}),
					link
				});
				await loadBranchData();
				const staticContext = {};
				const store = useStore(client);
				if (staticContext.url) {
					res.status(301).setHeader("Location", staticContext.url);
					res.end();
					return;
				}
				const status = staticContext.status === "404" ? 404 : 200;
				const content = rendered(staticContext, req, routes, store, client);
				res.status(status).send(content);
			} catch (err) {
				res.status(404).send("Not Found :(");

				console.error(`==> 😭  Rendering routes error: ${err}`);
			}
		})();
	});
};
