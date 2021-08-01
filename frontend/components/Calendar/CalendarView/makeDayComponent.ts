export const makeDayComponent = (DividedDay: string[][]) => {
  let dayComponent = "";
  for (const week of DividedDay) {
    let temp = '<div class="week-item" >';
    for (const day of week) {
      temp += day + "\n";
    }
    temp += "</div>\n";
    dayComponent += temp;
  }
  return dayComponent;
};
