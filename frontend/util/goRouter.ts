import { store } from "..";
import { calendar, intro, main, statistic } from "../redux/check/actions";
import { MinusMonth, PlusMonth } from "./getDate";
import { generateToday, getPath } from "./getPath";

export const goFrontMonth = (params: number) => {
  const minusMonth = MinusMonth(params);
  const [pathname, _] = getPath();
  history.pushState({ data: pathname }, "", `/${pathname}/${minusMonth}`);
  store.check.dispatch(calendar(minusMonth));
};

export const goBackMonth = (params: number) => {
  const plusMonth = PlusMonth(params);
  const [pathname, _] = getPath();
  history.pushState({ data: pathname }, "", `/${pathname}/${plusMonth}`);
  store.check.dispatch(calendar(plusMonth));
};

export const goIntro = () => {
  history.pushState({ data: "" }, "", "/");
  store.check.dispatch(intro());
};

export const goMain = () => {
  const thisYearMonth = generateToday();
  history.pushState({ data: "" }, "", `/main/${thisYearMonth}`);
  store.check.dispatch(main(Number(thisYearMonth)));
};

export const goCalendar = () => {
  const thisYearMonth = generateToday();
  history.pushState({ data: "calendar" }, "", `/calendar/${thisYearMonth}`);
  store.check.dispatch(calendar(Number(thisYearMonth)));
};

export const goStatistic = () => {
  const thisYearMonth = generateToday();
  history.pushState({ data: "statistic" }, "", `/statistic/${thisYearMonth}`);
  store.check.dispatch(statistic(Number(thisYearMonth)));
};
