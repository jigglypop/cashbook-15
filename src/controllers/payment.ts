import { Request, Response } from "express";
import HttpError from "../errors/HttpError";
import Payment, { IPayment } from "../models/Payment";
import { IAuthRequest } from "../middleware/jwtMiddleware";

interface IWritePaymentRequest extends IAuthRequest {
  body: IAuthRequest["body"] & IPayment;
}

interface IRemovePaymentRequest extends IAuthRequest {
  params: {
    id: string;
  };
}

export const readAll = async (req: Request, res: Response) => {
  const payments: Payment[] = await Payment.findAll();

  res.status(200).json({ data: payments });
};

export const write = async (req: IWritePaymentRequest, res: Response) => {
  const user = req.body.decoded;
  req.body.userId = user.id;
  const payment = await Payment.create({ ...req.body });

  res.status(200).json({ data: payment });
};

export const remove = async (req: IRemovePaymentRequest, res: Response) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    throw new HttpError(400, "없는 아이디입니다.");
  }
  await Payment.destroy({ where: { id } });

  res.status(203).json();
};
