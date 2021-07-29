import { Request, Response } from "express";
import Record, { IRecord, RecordType } from "../models/Record";
import Category from "../models/Category";
import Payment from "../models/Payment";
import HttpError from "../errors/HttpError";

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
  if (!(data.type in RecordType)) {
    throw new HttpError(400, "잘못된 타입입니다.");
  }
  const newRecord = await Record.create({ ...data });
  res.status(200).json({ data: newRecord });
};
