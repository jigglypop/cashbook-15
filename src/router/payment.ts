import express, { Router } from "express";
import { readAll, remove, write } from "../controllers/payment";
import wrapAsync from "../util/wrapAsync";

const paymentRouter: Router = express.Router();

paymentRouter.get("/", wrapAsync(readAll));
paymentRouter.post("/", wrapAsync(write));
paymentRouter.delete("/:id", wrapAsync(remove));

export default paymentRouter;
