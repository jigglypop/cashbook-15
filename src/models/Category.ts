import { AllowNull, Column, Model, Table, Unique } from "sequelize-typescript";
import RecordType from "./RecordType";

export interface ICategory {
  id?: number;
  value: string;
  type: RecordType;
}

@Table
export default class Category extends Model<ICategory> {
  @AllowNull(false)
  @Unique
  @Column
  value: string;

  @AllowNull(false)
  @Column
  type: RecordType;
}
