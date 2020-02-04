require("@babel/register")({
	plugins: ["dynamic-import-node"]
});

global.__DEV__ = process.env.NODE_ENV === 'development';

require("./config/webpack/hooks")();
require("./src/server");
