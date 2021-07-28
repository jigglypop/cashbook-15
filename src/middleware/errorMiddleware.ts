import { NextFunction, Request, Response } from "express";
import HttpError from "../errors/HttpError";

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  let status = 500;
  let message = "Server Error: " + error.message;

  if (error instanceof HttpError) {
    status = error.status;
    message = error.message;
  }

  res.status(status).json({ status, message });
};

export default errorMiddleware;
