import express from "express";
import monthRouter from "./month";
import paymentRouter from "./payment";
import templateRouter from "./template";
import userRouter from "./user";

const rootRouter = express();

rootRouter.use("/", templateRouter);
rootRouter.use("/api/auth", userRouter);
rootRouter.use("/api/payments", paymentRouter);
rootRouter.use("/api", monthRouter);

export default rootRouter;
