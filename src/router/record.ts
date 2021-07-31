import express, { Router } from "express";
import { readByMonth, write } from "../controllers/record";
import wrapAsync from "../util/wrapAsync";

const recordRouter: Router = express.Router();

recordRouter.get("/", wrapAsync(readByMonth));
recordRouter.post("/", wrapAsync(write));

export default recordRouter;
