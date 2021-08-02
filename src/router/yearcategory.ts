import express, { Router } from "express";
import { readYearCategory } from "../controllers/YearCategory";
import wrapAsync from "../util/wrapAsync";

const yearcategoryRouter: Router = express.Router();

yearcategoryRouter.get("/:yearCategoryId", wrapAsync(readYearCategory));

export default yearcategoryRouter;
