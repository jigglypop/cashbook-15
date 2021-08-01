import { store } from "../../..";
import { Container } from "../../../util/Container";
import { IRecordItem } from "../../Main/RecordItem";
import "./style.scss";

export default class FilteredCategory extends Container {
  public data: any = {};
  public dataKeys: number[];

  constructor($target: HTMLElement, ID: string) {
    super($target, "FilteredCategory", ["yearcategory"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    const { data } = store.list.getState();
    const { categoryId } = store.yearcategory.getState();
    if (data) {
      for (const key of Object.keys(data[0])) {
        if (data[0]) {
          this.data[key] = data[0][key]?.filter(
            (item: IRecordItem) => item.categoryId === Number(categoryId)
          );
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
    return `
    <div class="filtercategory-inner" >
        ${
          this.data.length === 0
            ? "<h1>카테고리 데이터가 없습니다</h1>"
            : `<div>
          ${
            this.data && this.dataKeys
              ? this.dataKeys
                  .map((key: number) => {
                    return `<DayItem :day="${key}" @getData="getData" />`;
                  })
                  .join("\n")
              : ""
          }
        </div>`
        }
    </div>`;
  }

  componentDidMount() {
    return {};
  }
}
