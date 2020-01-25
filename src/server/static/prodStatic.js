import path from "path";
import express from "express";

export default app => {
	app.use(express.static(path.resolve(process.cwd(), "build/public")));
};
