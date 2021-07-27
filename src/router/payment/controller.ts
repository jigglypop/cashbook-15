import { Request, Response } from "express";
import { Payment } from "../../models/Payment";

export const readAll = async (req: Request, res: Response) => {
  try {
    const payments: Payment[] = await Payment.findAll();

    res.status(200).json({ data: payments });
  } catch (error) {
    res.status(500).json({ error });
  }
};
