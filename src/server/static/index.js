const { NODE_ENV } = process.env;

export default app => {
	if (NODE_ENV === "production") {
		const prod = require("./prodStatic").default;
		prod(app);
	} else {
		const dev = require("./devStatic").default;
		dev(app);
	}
};
