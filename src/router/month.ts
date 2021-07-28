import express, { Router } from "express";
import { getMonth } from "../controllers/month";
import requireLoggedIn from "../middleware/isLoggedIn";

const monthRouter: Router = express.Router();

monthRouter.get("/month", requireLoggedIn, getMonth);

export default monthRouter;
