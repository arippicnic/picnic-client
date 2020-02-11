import express from "express";

import modulesSetup from "./server/modules";
import ssrSetup from "./server/ssrRequest";
import serverSetup from "./server/start-server";

const app = express();

modulesSetup(app);

ssrSetup(app);

serverSetup(app);

