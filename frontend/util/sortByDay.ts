import { IListItem } from "../redux/list";

export const sortByDay = (data: IListItem[]) => {
  const _data: any = {};
  const _calcdate: any = {};
  const _category: any = {};
  let all = 0;
  let income = 0;
  let expense = 0;
  let all_count = 0;
  let income_count = 0;
  let expense_count = 0;
  data.forEach((item: IListItem) => {
    const date = item.date;
    const categoryId = item.category.id;
    if (_data[date]) {
      _data[date].push(item);
    } else {
      _data[date] = [item];
      _calcdate[date] = {
        all: 0,
        expense: 0,
        income: 0,
      };
    }
    if (item.amount < 0) {
      if (_category[categoryId]) {
        _category[categoryId] += Math.abs(item.amount);
      } else {
        _category[categoryId] = Math.abs(item.amount);
      }
    }
    _calcdate[date].all += item.amount;
    all += item.amount;
    if (item.amount > 0) {
      _calcdate[date].income += item.amount;
      income += item.amount;
      income_count += 1;
    } else {
      _calcdate[date].expense += item.amount;
      expense += item.amount;
      expense_count += 1;
    }
    all_count += 1;
  });
  return [
    _data,
    _calcdate,
    _category,
    all,
    income,
    expense,
    all_count,
    income_count,
    expense_count,
  ];
};
