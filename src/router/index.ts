import express from "express";
import userRouter from "./auth";
import monthRouter from "./month";
import paymentRouter from "./payment";
import templateRouter from "./template";

const rootRouter = express();

rootRouter.use("/", templateRouter);
rootRouter.use("/api/payments", paymentRouter);
rootRouter.use("/api/auth", userRouter);
rootRouter.use("/api/month", monthRouter);

export default rootRouter;
