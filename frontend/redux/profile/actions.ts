export const CHANGEPROFILE = "CHANGEPROFILE";

export const changeProfile = (key: string, value: string | number) => ({
  type: CHANGEPROFILE,
  key: key,
  value: value,
});
