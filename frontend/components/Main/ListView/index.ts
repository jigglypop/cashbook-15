import { store } from "../../..";
import { Container } from "../../../util/Container";
import { IRecordItem } from "../RecordItem";
import "./style.scss";

export default class ListView extends Container {
  public data: any = {};
  public dataKeys: number[];

  constructor($target: HTMLElement, ID: string) {
    super($target, "ListView", ["list"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    const { filter, data } = store.list.getState();
    if (data) {
      this.data = {};
      for (const key of Object.keys(data[0])) {
        if (data[0] !== undefined) {
          if (data[0][key]) {
            if (filter === "income") {
              this.data[key] = data[0][key].filter(
                (item: IRecordItem) => item.type === "income"
              );
            } else if (filter === "expense") {
              this.data[key] = data[0][key].filter(
                (item: IRecordItem) => item.type === "expense"
              );
            } else {
              this.data[key] = data[0][key];
            }
          }
        }
      }

      this.dataKeys = Object.keys(this.data)
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
        <div>
          ${
            this.data && this.dataKeys && this.dataKeys.length !== 0
              ? this.dataKeys
                  .map((key: number) => {
                    return `<DayItem :day="${key}" @getData="getData" />`;
                  })
                  .join("\n")
              : "<h4 class='nodata' >데이터가 없습니다.</h4>"
          }
        </div>
    `;
  }

  componentDidMount() {
    return {};
  }
}
