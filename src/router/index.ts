import express from "express";
import templateRouter from "./template";

const rootRouter = express();

rootRouter.use("/", templateRouter);

export default rootRouter;
