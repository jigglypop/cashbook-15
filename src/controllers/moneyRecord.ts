import { Request, Response } from "express";
import MoneyRecord from "../models/MoneyRecord";
import Category from "../models/Category";
import Payment from "../models/Payment";

interface IReadMoneyRecordRequest extends Request {
  query: {
    month: string;
  };
}

export const readByMonth = async (
  req: IReadMoneyRecordRequest,
  res: Response
) => {
  const { month } = req.query;
  const moneyRecords: MoneyRecord[] = await MoneyRecord.findAll({
    where: { month },
    include: [Category, Payment],
  });
  res.status(200).json({ data: moneyRecords });
};
