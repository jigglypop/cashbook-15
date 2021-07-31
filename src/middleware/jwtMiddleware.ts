import type { NextFunction, Request, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import HttpError from "../errors/HttpError";

export interface IAuthRequest extends Request {
  body: {
    decoded: User;
  };
}

const jwtMiddleware: RequestHandler = (
  req: IAuthRequest,
  _,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const jwt_secret: string | undefined = process.env.JWT_SECRET;
  if (!authorization || !jwt_secret) {
    throw new HttpError(401, "사용자 인증에 실패했습니다.");
  }
  req.body.decoded = jwt.verify(authorization, jwt_secret) as User;
  next();
};
export default jwtMiddleware;
