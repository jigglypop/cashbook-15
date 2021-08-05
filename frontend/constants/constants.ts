export const SERVER_URL = process.env.SERVER_URL;
export const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${SERVER_URL}/callback`;
export const BASE_URL = "http://localhost:3000";

export const categoryObjectKeyValue: any = {
  1: "생활",
  2: "식비",
  3: "교통",
  4: "쇼핑/뷰티",
  5: "의료/건강",
  6: "문화/여가",
  7: "미분류",
  8: "월급",
  9: "용돈",
  10: "기타수입",
};

export const categoryObjectValueType: any = {
  생활: "expense",
  식비: "expense",
  교통: "expense",
  "쇼핑/뷰티": "expense",
  "의료/건강": "expense",
  "문화/여가": "expense",
  미분류: "expense",
  월급: "income",
  용돈: "income",
  기타수입: "income",
};

export const categoryObjectValueKey: any = {
  생활: 1,
  식비: 2,
  교통: 3,
  "쇼핑/뷰티": 4,
  "의료/건강": 5,
  "문화/여가": 6,
  미분류: 7,
  월급: 8,
  용돈: 9,
  기타수입: 10,
};

export const category = [
  { value: "생활", key: 1 },
  { value: "식비", key: 2 },
  { value: "교통", key: 3 },
  { value: "쇼핑/뷰티", key: 4 },
  { value: "의료/건강", key: 5 },
  { value: "문화/여가", key: 6 },
  { value: "미분류", key: 7 },
  { value: "월급", key: 8 },
  { value: "용돈", key: 9 },
  { value: "기타수입", key: 10 },
];

export const credits = [
  { key: 0, value: "카카오페이", category: 4 },
  { key: 1, value: "농협", category: 6 },
  { key: 2, value: "현대카드", category: 8 },
  { key: 3, value: "삼성카드", category: 7 },
  { key: 4, value: "직접선택", category: 10 },
];
