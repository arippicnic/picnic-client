require("@babel/register")({
	plugins: ["dynamic-import-node"]
});
require("./config/webpack/hooks")();
require("./src/server");
