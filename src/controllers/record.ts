import { Response } from "express";
import HttpError from "../errors/HttpError";
import Category from "../models/Category";
import Payment from "../models/Payment";
import Record, { IRecord } from "../models/Record";
import RecordType from "../models/RecordType";
import YearCategory from "../models/YearCategory";
import { IAuthRequest } from "../middleware/jwtMiddleware";
import { Transaction } from "sequelize";
import wrapTransaction from "../util/wrapTransaction";

interface IReadRecordRequest extends IAuthRequest {
  query: {
    month: string;
  };
}

interface IWriteRecordRequest extends IAuthRequest {
  body: IRecord & { year: number };
}

export const readByMonth = async (req: IReadRecordRequest, res: Response) => {
  const { month } = req.query;
  const { userId } = req.body;
  const records: Record[] = await Record.findAll({
    where: { month, userId },
    include: [Category, Payment],
    order: [["date", "ASC"]],
  });
  res.status(200).json({ data: records });
};

const addYearCategory = async (
  record: IWriteRecordRequest["body"],
  transaction: Transaction
) => {
  const { type, categoryId, year, amount, userId, month } = record;
  if (type === RecordType.INCOME) {
    return;
  }
  let categoryIdString = categoryId.toString();
  if (categoryIdString.length === 1) {
    categoryIdString = "0" + categoryIdString;
  }
  const yearCategoryId = Number(
    year.toString() + categoryIdString + userId.toString()
  );
  const yearCategory = await YearCategory.findByPk(yearCategoryId, {
    transaction,
  });
  if (!yearCategory) {
    await YearCategory.create<any>(
      {
        id: yearCategoryId,
        [month]: amount,
      },
      { transaction }
    );
    return;
  }

  await YearCategory.increment(
    { [month]: amount },
    { where: { id: yearCategoryId }, transaction }
  );
};

const writeRecord = async (record: IRecord, transaction: Transaction) => {
  const { paymentId, userId } = record;
  let payment = await Payment.findOne({
    where: { value: paymentId },
    transaction,
  });
  if (!payment) {
    payment = await Payment.create(
      {
        value: paymentId.toString(),
        userId,
      },
      { transaction }
    );
  }
  await Record.create({ ...record, paymentId: payment.id }, { transaction });
};

export const write = async (req: IWriteRecordRequest, res: Response) => {
  if (!Object.values(RecordType).includes(req.body.type)) {
    throw new HttpError(400, "잘못된 타입입니다.");
  }

  await wrapTransaction((t) => [
    addYearCategory(req.body, t),
    writeRecord(req.body, t),
  ]);

  const records: Record[] = await Record.findAll({
    where: { month: req.body.month, userId: req.body.userId },
    include: [Category, Payment],
    order: [["date", "ASC"]],
  });
  res.status(200).json({ data: records });
};
