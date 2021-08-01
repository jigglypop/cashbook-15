import { store } from "../../..";
import api from "../../../api";
import { setYearCategory } from "../../../redux/yearcategory/actions";
import { Container } from "../../../util/Container";
import "./style.scss";

export default class LineView extends Container {
  public state = {
    title: "",
  };
  public categoryId = -1;

  constructor($target: HTMLElement, ID: string) {
    super($target, "LineView", ["list"]);
    this.ID = ID;
    this.init();
  }

  async componentWillMount() {
    const { categoryId } = store.yearcategory.getState();
    const data = await api.yearmonth.getyearcategory(categoryId);
    if (data) {
      await store.yearcategory.dispatch(setYearCategory(data.data, categoryId));
    }
    return {};
  }

  render() {
    return `
        <LineChart :categoryId="${this.categoryId}" />
        `;
  }

  componentDidMount() {
    return {};
  }
}
