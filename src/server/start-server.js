const { NODE_ENV, PORT, APP_PORT } = process.env;
const port = PORT || APP_PORT;

export default app =>
	app.listen(port, error => {
		if (error) {
			return console.error(error);
		} else {
			return console.info(
				`Server running on http://localhost:${port} [${NODE_ENV}]`
			);
		}
	});
