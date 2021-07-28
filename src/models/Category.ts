import { AllowNull, Column, Model, Table, Unique } from "sequelize-typescript";

export interface ICategory {
  id?: number;
  value: string;
}

@Table
export default class Category extends Model<ICategory> {
  @AllowNull(false)
  @Unique
  @Column
  value: string;
}
