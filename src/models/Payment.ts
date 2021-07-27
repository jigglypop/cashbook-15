import { AllowNull, Column, Model, Table, Unique } from "sequelize-typescript";

export interface IPayment {
  id?: number;
  value: string;
}

@Table
export class Payment extends Model<IPayment> {
  @AllowNull(false)
  @Unique
  @Column
  value: string;
}
