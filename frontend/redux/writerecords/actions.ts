export const CHANGEWRITERECORDS = "CHANGEWRITERECORDS";

export const changeWriteRecords = (key: string, value: string | number) => ({
  type: CHANGEWRITERECORDS,
  key: key,
  value: value,
});
