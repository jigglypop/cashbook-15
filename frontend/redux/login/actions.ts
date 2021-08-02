export const CHANGELOGIN = "CHANGELOGIN";

export const changeLogin = (key: string, value: string) => ({
  type: CHANGELOGIN,
  key: key,
  value: value,
});
