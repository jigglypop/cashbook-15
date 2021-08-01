import express from "express";
import userRouter from "./auth";
import categoryRouter from "./category";
import githubRouter from "./github";
import paymentRouter from "./payment";
import recordRouter from "./record";
import templateRouter from "./template";
import yearcategoryRouter from "./yearcategory";

const rootRouter = express();

rootRouter.use("/", templateRouter);
rootRouter.use("/api/payments", paymentRouter);
rootRouter.use("/api/auth", userRouter);
rootRouter.use("/api/categories", categoryRouter);
rootRouter.use("/api/records", recordRouter);
rootRouter.use("/api/yearcategory", yearcategoryRouter);
rootRouter.use("/callback", githubRouter);

export default rootRouter;
