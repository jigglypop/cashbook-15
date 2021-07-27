import { Column, Model, NotNull, Table, Unique } from "sequelize-typescript";

@Table
export class Payment extends Model<Payment> {
  @Column
  @NotNull
  @Unique
  value: string;
}
