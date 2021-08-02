import { store } from "../../..";
import {
  category,
  categoryObjectKeyValue,
  categoryObjectValueType,
} from "../../../constants/constants";
import { changeWriteRecords } from "../../../redux/writerecords/actions";
import { Container } from "../../../util/Container";
import { $ } from "../../../util/jQurey";
import "./style.scss";

export default class CategorySelector extends Container {
  public type: string;
  constructor($target: HTMLElement, ID: string) {
    super($target, "CategorySelector", ["writerecords"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { categoryId } = store.writerecords.getState();
    const categoryName = categoryObjectKeyValue[categoryId];
    const type = categoryObjectValueType[categoryName];
    const typestring = type === "expense" ? "지출" : "수입";

    return `
        <h6 class="write-text" id="write-text" >분류</h6>
        <h4><span class="type-flag" >${typestring}</span> ${categoryName}</h4>
        <div class="category-select" id="category-select" >
          ${category
            .map((item) => {
              return `<div id="categoryitem-${item.key}" class="category-select-item invisible" >${item.value}</div>`;
            })
            .join("\n")}
        </div>         
    `;
  }

  setCategoryItem(e: any) {
    const categoryItem = e.target.id.split("-");
    if (categoryItem[0] === "categoryitem") {
      const id = Number(categoryItem[1]);
      const categoryName = categoryObjectKeyValue[id];
      const type = categoryObjectValueType[categoryName];
      store.writerecords.dispatch(changeWriteRecords("categoryId", id));
      store.writerecords.dispatch(changeWriteRecords("type", type));
    }
  }

  toggle() {
    const select = $("#category-select").get();
    $(select).toggleClass("invisible");
  }

  componentDidMount() {
    let flag = "var(--grayC)";
    const { date, userId, content, paymentId, amount } =
      store.writerecords.getState();
    if (
      date !== -1 &&
      userId !== -1 &&
      content !== "" &&
      paymentId !== -1 &&
      amount !== -1 &&
      date !== -1 &&
      userId !== -1 &&
      paymentId !== "" &&
      amount !== 0
    ) {
      flag = "var(--primary1)";
    }
    const select = $("#category-select").get();
    select.classList.add("invisible");
    $("#write-text").on("click", this.toggle);
    $(".category-select").on("click", this.setCategoryItem);
    $("#checksvg").css("stroke", flag);
  }
}
