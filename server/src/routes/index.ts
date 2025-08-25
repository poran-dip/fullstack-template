import { Router } from "express";

import welcomeRoute from "./welcome.js";

const router = Router();

router.use("/welcome", welcomeRoute);

export default router;
