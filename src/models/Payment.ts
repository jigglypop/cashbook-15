import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";
import User from "./user";

export interface IPayment {
  id?: number;
  value: string;
  userId: number;
}

@Table
export default class Payment extends Model<IPayment> {
  @AllowNull(false)
  @Unique
  @Column
  value: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;
  @BelongsTo(() => User)
  user: User;
}
