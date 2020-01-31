import express from "express";

import modulesSetup from "./server/modules";
import staticSetup from "./server/static";
import ssrSetup from "./server/ssrRequest";
import serverSetup from "./server/start-server";

const app = express();

modulesSetup(app);

staticSetup(app);

ssrSetup(app);

serverSetup(app);

