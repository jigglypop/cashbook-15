import { store } from "../../..";
import { categoryObjectKeyValue } from "../../../constants/constants";
import { Container } from "../../../util/Container";
import { IRecordItem } from "../../Main/RecordItem";
import "./style.scss";

export default class FilteredCategory extends Container {
  public data: any = {};
  public dataKeys: number[];
  public flag = false;

  constructor($target: HTMLElement, ID: string) {
    super($target, "FilteredCategory", ["yearcategory"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    const { data } = store.list.getState();
    const { categoryId } = store.yearcategory.getState();
    this.flag = false;
    if (data) {
      for (const key of Object.keys(data[0])) {
        if (data[0]) {
          this.data[key] = data[0][key]?.filter(
            (item: IRecordItem) => item.categoryId === Number(categoryId)
          );
          if (this.data[key].length > 0) {
            this.flag = true;
          }
        }
      }
      this.dataKeys = Object.keys(data[0])
        .map((item) => Number(item))
        .sort((a, b) => {
          return b - a;
        });
    }
    return {
      getData: (key: number) => {
        return this.data[key];
      },
    };
  }

  render() {
    const { categoryId } = store.yearcategory.getState();
    const categoryName = categoryObjectKeyValue[categoryId];
    return `
    <div class="filtercategory-inner" >
        <h3 class="all-expense" >월별 카테고리 지출 내역 : ${categoryName}</h3>
        ${
          this.data && this.dataKeys && this.dataKeys.length !== 0 && this.flag
            ? this.dataKeys
                .map((key: number) => {
                  return `<DayItem :day="${key}" @getData="getData" />`;
                })
                .join("\n")
            : "<h2 class='nodata' >데이터가 없습니다.</h2>"
        }
    </div>`;
  }

  componentDidMount() {
    return {};
  }
}
