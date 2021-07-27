import { Request, Response } from "express";
import { IPayment, Payment } from "../../models/Payment";

interface IWritePaymentRequest extends Request {
  body: IPayment;
}

export const readAll = async (req: Request, res: Response) => {
  try {
    const payments: Payment[] = await Payment.findAll();

    res.status(200).json({ data: payments });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const write = async (req: IWritePaymentRequest, res: Response) => {
  try {
    const { value } = req.body;
    const payment = await Payment.create({ value });

    res.status(200).json({ data: payment });
  } catch (error) {
    res.status(500).json({ error });
  }
};
