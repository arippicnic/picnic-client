import path from "path";
import helmet from 'helmet';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const { NODE_ENV } = process.env;

export default app => {
	app.use(helmet());
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cors());
	app.use(express.static(path.resolve(process.cwd(), "build/public")));
	if (NODE_ENV === "development") {
		const prod = require("./static").default;
		prod(app);
	}
};
