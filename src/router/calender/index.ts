import express, { Router } from "express";

const templateRouter: Router = express.Router();

templateRouter.get("/calendar", (req, res) => {
  res.render("index.html");
});
templateRouter.get("/statistic", (req, res) => {
  res.render("index.html");
});

export default templateRouter;