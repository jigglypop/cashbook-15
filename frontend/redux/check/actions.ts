export const CHECK = "CHECK";
export const CHECKANDROUTE = "CHECKANDROUTE";
export const MAIN = "MAIN";
export const STATISTIC = "STATISTIC";
export const CALENDAR = "CALENDAR";

export const main = () => ({
  type: MAIN,
});
export const statistic = () => ({
  type: STATISTIC,
});
export const calendar = (params: number) => ({
  type: CALENDAR,
  params: params,
});

export const check = (username: string) => ({
  type: CHECK,
  username: username,
});
export const checkAndRoute = (
  username: string,
  path: string,
  params?: number
) => ({
  type: CHECKANDROUTE,
  username: username,
  path: path,
  params: params ? Number(params) : 0,
});
