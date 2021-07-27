import express, { Router } from "express";
import { readAll } from "./controller";

const paymentRouter: Router = express.Router();

paymentRouter.get("/", readAll);

export default paymentRouter;
