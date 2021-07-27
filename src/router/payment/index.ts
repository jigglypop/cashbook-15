import express, { Router } from "express";
import { readAll, write } from "./controller";

const paymentRouter: Router = express.Router();

paymentRouter.get("/", readAll);
paymentRouter.post("/", write);

export default paymentRouter;
