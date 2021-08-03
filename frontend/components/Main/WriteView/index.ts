import { store } from "../../..";
import api from "../../../api";
import { setData } from "../../../redux/list/actions";
import { changeWriteRecords } from "../../../redux/writerecords/actions";
import { Container } from "../../../util/Container";
import { createToast } from "../../../util/createToast";
import { Day, makeYearMonth } from "../../../util/getDate";
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
          <h4 class="write-day" >${year}년 ${month}월 ${day}일</h4>
        </div>
        <div class="write-item" id="write-item-category">
          <CategorySelector />
        </div>
        <div class="write-item" >
          <h6 class="write-text" >내용</h6>
          <LineInput @onChange="changeContent" />
        </div>
        <div class="write-item" >
          <h6 class="write-text" >결제수단</h6>
          <GlassButton :text="결제수단 선택" @onClick="onPayment" />
        </div>
        <div class="write-item" >
          <h6 class="write-text" >금액</h6>
          <LineInput @onChange="changeAmount" :type="number" />
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
