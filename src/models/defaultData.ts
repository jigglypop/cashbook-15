import RecordType from "./RecordType";
import { ICategory } from "./Category";

export const CATEGORIES: ICategory[] = [
  { value: "생활", type: RecordType.EXPENSE },
  { value: "식비", type: RecordType.EXPENSE },
  { value: "교통", type: RecordType.EXPENSE },
  { value: "쇼핑/뷰티", type: RecordType.EXPENSE },
  { value: "의료/건강", type: RecordType.EXPENSE },
  { value: "문화/여가", type: RecordType.EXPENSE },
  { value: "미분류", type: RecordType.EXPENSE },
  { value: "월급", type: RecordType.INCOME },
  { value: "용돈", type: RecordType.INCOME },
  { value: "기타수입", type: RecordType.INCOME },
];
