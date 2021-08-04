import { dot } from "../../../util/makeLengthTwo";

export const makeDateDiv = (
  dates: number[],
  calcdate: any,
  isSameMonth: boolean
) => {
  const DayComponent: string[] = [];
  dates.forEach((date, i) => {
    const day = new Date().getDate();
    DayComponent[i] = `
    <div class="date ${
      Number(day) === Number(date) && isSameMonth ? "isToday" : ""
    }">
    ${date === -1 ? "" : `<h4 class="date-item" >${date}</h4>`}
    ${
      calcdate
        ? `
      <h4 class="calcdate-all" >${
        calcdate[date] && calcdate[date].all !== 0
          ? dot(calcdate[date].all) + "원"
          : ""
      }</h4>
      <h4 class="calcdate-income">${
        calcdate[date] && calcdate[date].income !== 0
          ? "+" + dot(calcdate[date].income) + "원"
          : ""
      }</h4>
      <h4 class="calcdate-expense">${
        calcdate[date] && calcdate[date].expense !== 0
          ? dot(calcdate[date].expense) + "원"
          : ""
      }</h4>`
        : ""
    }
    </div>`;
  });
  return DayComponent;
};
