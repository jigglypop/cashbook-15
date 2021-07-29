import { Request, Response } from "express";
import HttpError from "../errors/HttpError";
import Category from "../models/Category";
import Payment from "../models/Payment";
import Record, { IRecord } from "../models/Record";
import RecordType from "../models/RecordType";

interface IReadRecordRequest extends Request {
  query: {
    month: string;
  };
}

interface IWriteRecordRequest extends Request {
  body: IRecord;
}

export const readByMonth = async (req: IReadRecordRequest, res: Response) => {
  const { month } = req.query;
  const records: Record[] = await Record.findAll({
    where: { month },
    include: [Category, Payment],
  });
  res.status(200).json({ data: records });
};

export const write = async (req: IWriteRecordRequest, res: Response) => {
  const data: IRecord = {
    ...req.body,
    month: Math.floor(req.body.date / 100),
  };
  if (!Object.values(RecordType).includes(data.type)) {
    throw new HttpError(400, "잘못된 타입입니다.");
  }
  const newRecord = await Record.create({ ...data });
  res.status(200).json({ data: newRecord });
};
