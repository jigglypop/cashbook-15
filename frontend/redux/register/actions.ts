export const CHANGEREGISTER = "CHANGEREGISTER";

export const changeRegister = (key: string, value: string) => ({
  type: CHANGEREGISTER,
  key: key,
  value: value,
});
