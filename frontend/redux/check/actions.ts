export const CHECK = "CHECK";
export const CHECKANDROUTE = "CHECKANDROUTE";

export const MAIN = "MAIN";
export const INTRO = "INTRO";
export const STATISTIC = "STATISTIC";
export const CALENDAR = "CALENDAR";
export const INIT = "INIT";

export const initCheck = () => ({
  type: INIT,
});

export const main = (params: number) => ({
  type: MAIN,
  params: params,
});

export const intro = () => ({
  type: INTRO,
});
export const statistic = (params: number) => ({
  type: STATISTIC,
  params: params,
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
  id: number,
  img: string,
  path: string,
  params?: number
) => ({
  type: CHECKANDROUTE,
  username: username,
  id: id,
  img: img,
  path: path,
  params: params ? Number(params) : 0,
});
