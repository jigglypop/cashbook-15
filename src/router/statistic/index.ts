import express, { Router } from "express";

const statisticRouter: Router = express.Router();

statisticRouter.get("/calendar", (req, res) => {
  res.render("index.html");
});
statisticRouter.get("/statistic", (req, res) => {
  res.render("index.html");
});

export default statisticRouter;