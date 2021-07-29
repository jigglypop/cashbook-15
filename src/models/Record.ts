import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Category from "./Category";
import Payment from "./Payment";
import User from "./user";
import RecordType from "./RecordType";

export interface IRecord {
  id?: number;
  type: RecordType;
  amount: number;
  content: string;
  date: number;
  month: number;
  userId: number;
  categoryId: number;
  paymentId: number;
}

@Table
export default class Record extends Model<IRecord> {
  @AllowNull(false)
  @Column
  type: RecordType;

  @AllowNull(false)
  @Column
  amount: number;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @Column
  date: number;

  @AllowNull(false)
  @Column
  month: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;
  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @AllowNull(false)
  @ForeignKey(() => Payment)
  @Column
  paymentId: number;
  @BelongsTo(() => Payment)
  payment: Payment;
}
