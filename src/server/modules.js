import path from "path";
import helmet from 'helmet';
import express from "express";
import favicon from 'serve-favicon';
import cors from "cors";
import cookieParser from "cookie-parser";

export default app => {
	app.use(helmet());
	app.use(cookieParser());

	app.use(cors());
	// app.use(favicon(path.resolve(process.cwd(), 'build/public/favicon.ico')));
	app.use(express.static(path.resolve(process.cwd(), "build/public")));
};
