export const SETLIST = "SETLIST";
export const SETFILTER = "SETFILTER";

export const setData = (data: any) => ({
  type: SETLIST,
  data: data,
});

export const setFilter = (filter: string) => ({
  type: SETFILTER,
  filter: filter,
});
