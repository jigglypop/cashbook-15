import { Request, Response } from "express";
import { IPayment, Payment } from "../models/Payment";
import HttpError from "../errors/HttpError";

interface IWritePaymentRequest extends Request {
  body: IPayment;
}

interface IRemovePaymentRequest extends Request {
  params: {
    id: string;
  };
}

export const readAll = async (req: Request, res: Response) => {
  const payments: Payment[] = await Payment.findAll();

  res.status(200).json({ data: payments });
};

export const write = async (req: IWritePaymentRequest, res: Response) => {
  const { value } = req.body;
  const payment = await Payment.create({ value });

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
