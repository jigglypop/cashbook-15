import { store } from "../../..";
import { Container } from "../../../util/Container";
import { dot } from "../../../util/makeLengthTwo";
import { PieChartSVG } from "../PieChart/PieChartSVG";
import { makeCategoryItem } from "./makeCategoryItem";
import "./style.scss";

export default class PieView extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "PieView", ["list"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { data } = store.list.getState();
    const categoryData = [];
    for (let i = 1; i < 8; i++) {
      categoryData.push([0, i]);
    }

    const [expenseSum, category, categoryItem] = makeCategoryItem(
      data,
      categoryData
    );
    return `
        <div class="pieview-inner">
          <h3 class="all-expense" >월별 총 지출 금액 : ${dot(
            expenseSum
          )} 원</h3>
        </div>
        <div class="pieview-inner" >
          <div class="pie-item pie-chart" >${PieChartSVG(category)}</div>
          <div class="pie-item">${categoryItem}</div>
        </div>
    `;
  }

  componentDidMount() {
    return {};
  }
}
