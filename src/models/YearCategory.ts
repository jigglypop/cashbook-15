import {
  AllowNull,
  Column,
  Default,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

export interface IYearCategory {
  id?: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;
  12: number;
}

@Table
export default class YearCategory extends Model<YearCategory> {
  @AllowNull(false)
  @PrimaryKey
  @Column
  id: number;

  @Default(0)
  @Column
  1: number;

  @Default(0)
  @Column
  2: number;

  @Default(0)
  @Column
  3: number;

  @Default(0)
  @Column
  4: number;

  @Default(0)
  @Column
  5: number;

  @Default(0)
  @Column
  6: number;

  @Default(0)
  @Column
  7: number;

  @Default(0)
  @Column
  8: number;

  @Default(0)
  @Column
  9: number;

  @Default(0)
  @Column
  10: number;

  @Default(0)
  @Column
  11: number;

  @Default(0)
  @Column
  12: number;
}
