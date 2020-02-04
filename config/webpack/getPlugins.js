import path from "path";
import ManifestPlugin from "webpack-manifest-plugin";
import LoadablePlugin from "@loadable/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default ({ isDev, webpack }) => {
	const plugins = [
		new ManifestPlugin({
			fileName: path.resolve(
				process.cwd(),
				"build/public/webpack-assets.json"
			),
			filter: file => file.isInitial
		}),
		new LoadablePlugin({
			writeToDisk: true,
			filename: "../loadable-stats.json"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.GRAPH_URL": JSON.stringify(process.env.GRAPH_URL)
		}),
		new CleanWebpackPlugin()
	];
	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}
	return plugins;
};
