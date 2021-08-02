import { store } from "../../..";
import { categoryObjectKeyValue } from "../../../constants/constants";
import { Container } from "../../../util/Container";
import { dot } from "../../../util/makeLengthTwo";
import "./style.scss";

interface ILineChart {
  categoryId: number;
}
export default class LineChart extends Container {
  public state = {
    title: "",
  };
  public props: ILineChart;

  constructor($target: HTMLElement, ID: string, props: ILineChart) {
    super($target, "LineChart", ["yearcategory"]);
    this.props = props;
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { data, categoryId } = store.yearcategory.getState();
    const monthdata = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const monthdataRatio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const xPoint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const yPoint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let maxValue = 9000;
    const yMax = 250;

    if (data) {
      for (let i = 1; i < 13; i++) {
        monthdata[i - 1] = Math.abs(data[i]);
      }
      maxValue = Math.max(...monthdata);
    }
    for (let i = 0; i < 12; i++) {
      const ratio = (monthdata[i] / maxValue) * 100;
      monthdataRatio[i] = ratio;
      const y = isNaN((1 - monthdata[i] / maxValue) * yMax + 20)
        ? 0
        : (1 - monthdata[i] / maxValue) * yMax + 20;
      yPoint[i] = y;
    }
    const yGap = Math.ceil(maxValue / 3);
    let xLabel = "";
    let Circles = "";
    let lines = "";

    for (let i = 1; i < 13; i++) {
      const start = 100 + 50 * (i - 1);
      xPoint[i - 1] = start;
      xLabel += `<text x="${start}" y="${
        yMax + 50
      }" fill="var(--text)" >${i}</text>`;
      Circles += `
      <text x="${xPoint[i - 1]}" y="${
        yPoint[i - 1] - 10
      }"  font-size="10px" fill="var(--text)" >${dot(
        monthdata[i - 1]
      )} 원</text>
      <circle cx="${xPoint[i - 1]}" cy="${
        yPoint[i - 1]
      }" r="4" class="circle-inner" fill="var(--category-${categoryId})" ></circle>

      `;
      if (i >= 2) {
        lines += `<line x1="${xPoint[i - 2]}" x2="${xPoint[i - 1]}" y1="${
          yPoint[i - 2]
        }" y2="${
          yPoint[i - 1]
        }" class="circle-line" stroke="var(--category-${categoryId})"></line>`;
      }
    }
    const yLavel = [0, 0, 0];
    for (let i = 1; i < 4; i++) {
      yLavel[i - 1] = yGap * i;
    }
    const categoryName = categoryObjectKeyValue[categoryId];

    return `
    <div class="yearcategory-title" >
      <h3>월별 지출 : ${categoryName}</h3>
    </div>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph" aria-labelledby="title" role="img">
    <g class="grid x-grid" id="xGrid">
      <line x1="90" x2="90" y1="5" y2="${yMax + 21}"></line>
    </g>
    <g class="grid y-grid" id="yGrid">
      <line x1="90" x2="705" y1="270" y2="${yMax + 20}"></line>
      ${lines}

    </g>
      <g class="labels x-labels">
      ${xLabel}
    </g>
    <g class="labels y-labels">
      <text x="80" y="15">${dot(yLavel[2])} 원</text>
      <text x="80" y="95">${dot(yLavel[1])} 원</text>
      <text x="80" y="175">${dot(yLavel[0])} 원</text>
      <text x="80" y="273">0</text>
    </g>
    <g>
      ${Circles}
    </g>
    </svg>
    `;
  }

  componentDidMount() {
    return {};
  }
}
