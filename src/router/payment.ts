import express, { Router } from "express";
import { readAll, remove, write } from "../controllers/payment";

const paymentRouter: Router = express.Router();

paymentRouter.get("/", readAll);
paymentRouter.post("/", write);
paymentRouter.delete("/:id", remove);

export default paymentRouter;
