import LoadablePlugin from "@loadable/webpack-plugin";

export default ({ isDev, webpack }) => {
	const plugins = [
		new LoadablePlugin({
			writeToDisk: true,
			filename: "../loadable-stats.json"
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.GRAPH_URL": JSON.stringify(process.env.GRAPH_URL)
		})
	];
	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}
	return plugins;
};
