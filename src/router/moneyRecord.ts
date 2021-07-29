import express, { Router } from "express";
import { readByMonth, write } from "../controllers/moneyRecord";
import wrapAsync from "../utils/wrapAsync";

const moneyRecordRouter: Router = express.Router();

moneyRecordRouter.get("/", wrapAsync(readByMonth));
moneyRecordRouter.post("/", wrapAsync(write));

export default moneyRecordRouter;
