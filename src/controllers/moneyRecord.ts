import { Request, Response } from "express";
import MoneyRecord, { IMoneyRecord } from "../models/MoneyRecord";
import Category from "../models/Category";
import Payment from "../models/Payment";

interface IReadMoneyRecordRequest extends Request {
  query: {
    month: string;
  };
}

interface IWriteMoneyRecordRequest extends Request {
  body: IMoneyRecord;
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

export const write = async (req: IWriteMoneyRecordRequest, res: Response) => {
  const data: IMoneyRecord = {
    ...req.body,
    month: Math.floor(req.body.date / 100),
  };
  const newRecord = await MoneyRecord.create({ ...data });
  res.status(200).json({ data: newRecord });
};
