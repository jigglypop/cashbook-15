export const divide = (nums: number, array: string[]) => {
  const count =
    Math.floor(array.length / nums) +
    (Math.floor(array.length % nums) > 0 ? 1 : 0);
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(array.splice(0, nums));
  }
  return result;
};
