import express, { Router } from "express";
import { readAll, remove, write } from "../controllers/payment";
import wrapAsync from "../util/wrapAsync";
import jwtMiddleware from "../middleware/jwtMiddleware";

const paymentRouter: Router = express.Router();

paymentRouter.get("/", jwtMiddleware, wrapAsync(readAll));
paymentRouter.post("/", jwtMiddleware, wrapAsync(write));
paymentRouter.delete("/:id", jwtMiddleware, wrapAsync(remove));

export default paymentRouter;
