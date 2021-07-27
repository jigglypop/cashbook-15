import { AllowNull, Column, Model, Table, Unique } from "sequelize-typescript";

export interface IPayment {
  value: string;
}

@Table
export class Payment extends Model<IPayment> {
  @AllowNull(false)
  @Unique
  @Column
  value: string;
}
