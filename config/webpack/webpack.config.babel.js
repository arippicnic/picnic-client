import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

import getEntry from "./getEntry";
import getPlugins from "./getPlugins";

export default env => {
	if (!env || !env.MODE) {
		throw new Error("webpack --env.MODE option is not specified");
	}
	const isDev = env.MODE === "dev";
	const USE_CSS_MODULES = true;
	const optimization_dev = {
		minimize: false
	};
	const optimization_prod = {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	};
	const optimization = isDev ? optimization_dev : optimization_prod;
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
				},
				{
					test: /\.(css|scss)$/,
					exclude: /\.module\.(css|scss)$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: isDev,
								reloadAll: true
							}
						},
						{
							loader: "css",
							options: {
								sourceMap: true
							}
						},
						{ loader: "postcss", options: { sourceMap: true } }
					]
				},
				{
					test: /\.module\.(css|scss)$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: isDev,
								reloadAll: true
							}
						},
						{
							loader: "css",
							options: {
								importLoaders: 1,
								modules: USE_CSS_MODULES && {
									localIdentName: isDev
										? "[name]__[local]"
										: "[hash:base64:5]",
									context: path.resolve(process.cwd(), "src")
								},
								sourceMap: true
							}
						},
						{ loader: "postcss", options: { sourceMap: true } }
					]
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
		plugins: getPlugins({ isDev, webpack }),
		optimization
	};
};
