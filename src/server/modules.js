import path from "path";
import helmet from 'helmet';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const { NODE_ENV } = process.env;

export default app => {
	app.use(helmet());
	app.use(cookieParser());

	app.use(cors());
	app.use(express.static(path.resolve(process.cwd(), "build/public")));
};
