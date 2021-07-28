import { Request, Response } from "express";
import { IPayment, Payment } from "../models/Payment";

interface IWritePaymentRequest extends Request {
  body: IPayment;
}

interface IRemovePaymentRequest extends Request {
  params: {
    id: string;
  };
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

export const remove = async (req: IRemovePaymentRequest, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
      res.status(400).json();
    }
    await Payment.destroy({ where: { id } });

    res.status(203).json();
  } catch (error) {
    res.status(500).json({ error });
  }
};
