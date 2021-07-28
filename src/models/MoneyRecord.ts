import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Month from "./month";
import Category from "./Category";
import Payment from "./Payment";

export interface IMoneyRecord {
  id?: number;
  value: string;
  monthId: number;
  categoryId: number;
  paymentId: number;
}

@Table
export default class MoneyRecord extends Model<IMoneyRecord> {
  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(false)
  @Column
  value: number;

  @ForeignKey(() => Month)
  @Column
  monthId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @ForeignKey(() => Payment)
  @Column
  paymentId: number;
  @BelongsTo(() => Payment)
  payment: Payment;
}
