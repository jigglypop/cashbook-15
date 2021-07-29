import express, { Router } from "express";
import { readByMonth } from "../controllers/moneyRecord";
import wrapAsync from "../utils/wrapAsync";

const moneyRecordRouter: Router = express.Router();

moneyRecordRouter.get("/", wrapAsync(readByMonth));

export default moneyRecordRouter;
