import express, { Router } from "express";
import { readByMonth, write } from "../controllers/record";
import wrapAsync from "../util/wrapAsync";
import jwtMiddleware from "../middleware/jwtMiddleware";

const recordRouter: Router = express.Router();

recordRouter.get("/", jwtMiddleware, wrapAsync(readByMonth));
recordRouter.post("/", jwtMiddleware, wrapAsync(write));

export default recordRouter;
