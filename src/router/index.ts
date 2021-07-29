import express from "express";
import userRouter from "./auth";
import paymentRouter from "./payment";
import templateRouter from "./template";
import categoryRouter from "./category";

const rootRouter = express();

rootRouter.use("/", templateRouter);
rootRouter.use("/api/payments", paymentRouter);
rootRouter.use("/api/auth", userRouter);
rootRouter.use("/api/categories", categoryRouter);

export default rootRouter;
