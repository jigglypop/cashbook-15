import type { NextFunction, Request, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export interface IHeader {
  authorization?: string | undefined;
}

// 쿠키 로그인 상황 체크
const jwtMiddleware: RequestHandler = (req: Request, _, next: NextFunction) => {
  try {
    const { authorization }: IHeader = req.headers;
    const jwt_secret: string | undefined = process.env.JWT_SECRET;
    if (authorization && jwt_secret) {
      const decoded = jwt.verify(authorization, jwt_secret);
      req.body["decoded"] = decoded;
    }
    next();
  } catch (e) {
    next();
  }
};
export default jwtMiddleware;
