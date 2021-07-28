import express, { Router } from "express";
import { read } from "../controllers/month";
import requireLoggedIn from "../middleware/isLoggedIn";
import wrapAsync from "../utils/wrapAsync";

const monthRouter: Router = express.Router();

monthRouter.get("/month", requireLoggedIn, wrapAsync(read));

export default monthRouter;
