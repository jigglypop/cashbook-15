import express from "express";
import templateRouter from "./template";
import paymentRouter from "./payment";

const rootRouter = express();

rootRouter.use("/", templateRouter);

rootRouter.use("/api/payments", paymentRouter);

export default rootRouter;
