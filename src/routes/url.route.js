import { Router } from "express";

import { CreateUrl, GetUrl } from "../controllers/url.controller.js";


const router = Router();


router.route("/createurl").post(CreateUrl);
router.route("/:shorturl").get(GetUrl);

export default router