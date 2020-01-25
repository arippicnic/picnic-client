import cors from "cors";
import cookieParser from "cookie-parser";

export default app => {
	app.use(cookieParser());

	app.use(cors());
};
