import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import hot from "webpack-hot-middleware";
import webpackConfig from "../.././config/webpack/webpack.config.babel";

export default app => {
	const wepackStatus = webpackConfig({ MODE: "dev" });
	const compiler = webpack(wepackStatus);
	compiler.apply(new webpack.ProgressPlugin());

	app.use(
		middleware(compiler, {
			publicPath: wepackStatus.output.publicPath,
			headers: { "Access-Control-Allow-Origin": "*" },
			hot: true,
			quiet: true,
			noInfo: true,
			writeToDisk: true,
			stats: "minimal",
			serverSideRender: true
		})
	);

	app.use(
		hot(compiler, {
			log: false
		})
	);
};
