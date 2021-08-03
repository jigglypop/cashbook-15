import { Response } from "express";
import HttpError from "../errors/HttpError";
import Category from "../models/Category";
import Payment from "../models/Payment";
import Record, { IRecord } from "../models/Record";
import RecordType from "../models/RecordType";
import YearCategory from "../models/YearCategory";
import { IAuthRequest } from "../middleware/jwtMiddleware";

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

export const write = async (req: IWriteRecordRequest, res: Response) => {
  const { paymentId, userId, year, categoryId, amount } = req.body;
  if (!paymentId || !userId || !year || !categoryId || !amount)
    throw new HttpError(400, "카드 기록이 필요합니다.");
  let payment = await Payment.findOne({ where: { value: paymentId } });
  if (!payment) {
    payment = await Payment.create({
      value: paymentId.toString(),
      userId,
    });
  }
  let categoryIdString = categoryId.toString();
  if (categoryIdString.length === 1) {
    categoryIdString = "0" + categoryIdString;
  }
  const yearCategoryId = Number(
    year.toString() + categoryIdString + userId.toString()
  );
  const yearCategory: any = await YearCategory.findByPk(yearCategoryId);

  if (req.body.type === "expense") {
    if (!yearCategory) {
      const yearCategory = await YearCategory.create<any>({
        id: yearCategoryId,
        [req.body.month]: amount,
      });
      if (!yearCategory) throw new HttpError(500, "월별 지출 내역 생성 실패");
    } else {
      const monthValue = await yearCategory.getDataValue(req.body.month);
      const _yearCategory = await YearCategory.update(
        {
          [req.body.month]: monthValue + amount,
        },
        {
          where: {
            id: yearCategoryId,
          },
        }
      );
      if (!_yearCategory)
        throw new HttpError(500, "월별 지출 내역 업데이트 실패");
    }
  }

  const _paymentId = payment.id;
  const req_body = { ...req.body };
  req_body.paymentId = _paymentId;
  const data: IRecord = {
    ...req_body,
  };
  if (!Object.values(RecordType).includes(data.type)) {
    throw new HttpError(400, "잘못된 타입입니다.");
  }
  const newRecord = await Record.create({ ...data });
  const { month } = newRecord;
  const records: Record[] = await Record.findAll({
    where: { month: month, userId: userId },
    include: [Category, Payment],
    order: [["date", "ASC"]],
  });
  res.status(200).json({ data: records });
};
