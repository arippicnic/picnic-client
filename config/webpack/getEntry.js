export default isDev => {
	let entry = [
		"webpack-hot-middleware/client?reload=true",
		"./src/client.js"
	];
	if (!isDev) entry = ["./src/client.js"];
	return entry;
};
