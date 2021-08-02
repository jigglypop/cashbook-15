export const makeCategoryItem = (data: any, categoryData: number[][]) => {
  let expenseSum = 0;
  let category: any = {};

  let categoryItem = "<div class='pie-item'>\n";
  if (data) {
    expenseSum = data[5];
    category = data[2];
    for (let i = 1; i < 8; i++) {
      if (category[i]) {
        categoryData[i - 1][0] = Math.abs(category[i]);
      }
    }
    categoryData.sort((a, b) => {
      return b[0] - a[0];
    });
    categoryData.forEach((item) => {
      categoryItem += `<CategoryItem :categoryAmount="${Math.abs(
        item[0]
      )}" :categoryId="${item[1]}" :expense="${expenseSum}" />\n`;
    });
  }
  categoryItem += "</div>";
  return [expenseSum, category, categoryItem];
};
