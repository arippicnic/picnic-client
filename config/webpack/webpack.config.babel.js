import path from "path";
import webpack from "webpack";

import getEntry from "./getEntry";
import getPlugins from "./getPlugins";

export default env => {
	if (!env || !env.MODE) {
		throw new Error("webpack --env.MODE option is not specified");
	}
	const isDev = env.MODE === "dev";
	return {
		mode: isDev ? "development" : "production",
		devtool: isDev ? "eval-source-map" : false,
		context: path.resolve(process.cwd()),
		entry: getEntry(isDev),
		output: {
			path: path.resolve(process.cwd(), "./build/public/assets"),
			publicPath: "/assets/",
			filename: isDev ? "[name].js" : "[name].[chunkhash:8].js",
			chunkFilename: isDev ? "[id].js" : "[id].[chunkhash:8].js"
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader"
				}
			]
		},
		resolve: {
			modules: ["src", "node_modules"],
			descriptionFiles: ["package.json"],
			extensions: [".js"],
			alias: { "react-dom": "@hot-loader/react-dom" }
		},
		resolveLoader: {
			moduleExtensions: ["-loader"]
		},
		plugins: getPlugins({ isDev, webpack })
	};
};
