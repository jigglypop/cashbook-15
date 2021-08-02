import "./style.scss";

const createPath = (start: number[], end: number[]) => {
  const flag = start[0] === end[0];
  return `
    <path d="
      M ${start[0]} ${start[1]}
      A 20 20, 0, ${end[2] > 50 || flag ? "1" : "0"}, 0, ${
    flag ? end[0] - 0.1 : end[0]
  } ${flag ? end[1] - 0.1 : end[1]}"
      stroke="var(--category-${Number(end[3])})"
      fill="transparent"
      class="circle" />
  `;
};
export const PieChartSVG = (data: any) => {
  const r = 20;
  const margin = 10;
  const pi = Math.PI;

  const datas = [];
  if (Object.keys(data).length === 0) {
    datas.push(["11", 1]);
    datas.push(["11", 2]);
  } else {
    for (const index of Object.keys(data)) {
      datas.push([index, data[index]]);
    }
  }

  const total = datas.reduce((acc, cur) => acc + cur[1], 0);
  const pi_datas = datas.map((nums) => {
    const [index, num] = nums;
    return [(num / total) * 100, (num / total) * (2 * pi), index];
  });

  for (let i = 1; i < pi_datas.length; i++) {
    pi_datas[i][1] += pi_datas[i - 1][1];
  }

  let data_point = pi_datas.map((data) => {
    const [ratio, radian, index] = data;
    const y = r + margin + Math.sin(radian) * 20;
    const x = r + margin + Math.cos(radian) * 20;
    return [y, x, ratio, index];
  });
  const start_point = [data_point[data_point.length - 1]];

  data_point = start_point.concat(data_point);
  let joined_path = "";
  for (let i = 0; i < data_point.length - 1; i++) {
    joined_path += createPath(data_point[i], data_point[i + 1]) + "\n";
  }

  let isTwo = false;
  if (data_point.length === 2) isTwo = true;

  return `
  <svg width="500" height="500" viewBox="${
    isTwo ? "-12 -12" : "-20 -20"
  } 100 100">
    ${joined_path}
  </svg>
`;
};
