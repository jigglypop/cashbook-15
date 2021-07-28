import express, { Router } from "express";
import { getMonth } from "../../controllers/month/getMonth";
import checkLoggedIn from "../../middleware/checkLoggedIn";
import jwtMiddleware from "../../middleware/jwtMiddleware";

const monthRouter: Router = express.Router();

monthRouter.get("/month", jwtMiddleware, checkLoggedIn, getMonth);

export default monthRouter;
