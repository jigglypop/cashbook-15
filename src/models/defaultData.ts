import { ICategory } from "./Category";
import RecordType from "./RecordType";

export const CATEGORIES: ICategory[] = [
  { id: 1, value: "생활", type: RecordType.EXPENSE },
  { id: 2, value: "식비", type: RecordType.EXPENSE },
  { id: 3, value: "교통", type: RecordType.EXPENSE },
  { id: 4, value: "쇼핑/뷰티", type: RecordType.EXPENSE },
  { id: 5, value: "의료/건강", type: RecordType.EXPENSE },
  { id: 6, value: "문화/여가", type: RecordType.EXPENSE },
  { id: 7, value: "미분류", type: RecordType.EXPENSE },
  { id: 8, value: "월급", type: RecordType.INCOME },
  { id: 9, value: "용돈", type: RecordType.INCOME },
  { id: 10, value: "기타수입", type: RecordType.INCOME },
];
