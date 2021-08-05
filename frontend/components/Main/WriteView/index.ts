import { store } from "../../..";
import api from "../../../api";
import { setData } from "../../../redux/list/actions";
import { changeWriteRecords } from "../../../redux/writerecords/actions";
import { Container } from "../../../util/Container";
import { createToast } from "../../../util/createToast";
import { Day, makeYearMonth } from "../../../util/getDate";
import { getPath } from "../../../util/getPath";
import { $ } from "../../../util/jQurey";
import { sortByDay } from "../../../util/sortByDay";
import "./style.scss";

export default class WriteView extends Container {
  public state = {
    errorText: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "WriteView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    const { id } = store.check.getState();
    store.writerecords.dispatch(changeWriteRecords("userId", id));
    return {
      onPayment: () => {
        $(".CardContainerOuter").toggleClass("isNotDisplay");
      },
      changeContent: (e: any) => {
        store.writerecords.dispatch(
          changeWriteRecords("content", e.target.value)
        );
      },
      changePayment: (e: any) => {
        store.writerecords.dispatch(
          changeWriteRecords("paymentId", e.target.value)
        );
      },
      changeDay: (e: any) => {
        const path = getPath();
        const params = path[1];
        const year = Number(params.toString().slice(0, 4));
        const month = Number(params.toString().slice(4, 7));
        const nowLast = new Date(year, month, 0);
        const nDate = nowLast.getDate();
        const min = Math.min(e.target.value, nDate);
        e.target.value = min === 0 ? 1 : min;
        store.writerecords.dispatch(changeWriteRecords("date", min));
      },
      changeAmount: (e: any) => {
        const { type } = store.writerecords.getState();
        let value = Math.abs(Number(e.target.value));

        if (type === "expense") {
          value = value * -1;
        }
        store.writerecords.dispatch(changeWriteRecords("amount", value));
      },
      writeApi: async () => {
        const data = await api.records.writerecords();
        const errorText = $("#write-errortext").get();
        if (data.status >= 400) {
          errorText.innerText = "수입, 지출 입력 에러: " + data.message;
        } else {
          store.list.dispatch(setData(sortByDay(data.data)));
          errorText.innerText = "";
          createToast("수입, 지출 등록");
        }
      },
    };
  }

  render() {
    const { params } = store.check.getState();
    const [year, month] = makeYearMonth(params);
    const day = Day(new Date());
    store.writerecords.dispatch(changeWriteRecords("month", month));
    store.writerecords.dispatch(changeWriteRecords("date", day));
    store.writerecords.dispatch(changeWriteRecords("year", year));

    return `
        <div class="write-item" >
          <h6 class="write-text" >일자</h6>
          <div class="write-input" >
            <h4 class="write-day" >${year}/${month}/</h4>
            <LineInput @onChange="changeDay" :value="${day}" :type="number" :width="35px" :fontsize="25px" />
          </div>
        </div>
        <div class="write-item" id="write-item-category">
          <CategorySelector />
        </div>
        <div class="write-item" >
          <h6 class="write-text" >내용</h6>
          <LineInput @onChange="changeContent" :width="120px"/>
        </div>
        <div class="write-item" >
          <CreditSelector />
        </div>
        <div class="write-item" >
          <h6 class="write-text" >금액</h6>
          <LineInput @onChange="changeAmount" :type="number" :width="120px"/>
        </div>
        <SmallButton :text="제출" @onClick="writeApi" />
    `;
  }

  removeVisible() {
    const select = $("#category-select").get();
    $(select).removeClass("visible");
  }

  componentDidMount() {
    const select = $("#category-select").get();
    $("#write-item-category").on("click", function () {
      $(select).addClass("visible");
    });

    $(".category-select").on("click", function (e: any) {
      const categoryItem = e.target.id.split("-");
      if (categoryItem[0] === "category") {
        const id = Number(categoryItem[1]);
        store.writerecords.dispatch(changeWriteRecords("categoryId", id));
      }
    });
  }
}
