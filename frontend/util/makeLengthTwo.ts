export const makeLengthTwo = (nums: number) => {
  const _nums = nums.toString();
  if (_nums.length === 1) {
    return "0" + _nums;
  } else {
    return _nums;
  }
};

export const dot = (nums: number) => {
  if (nums < 0) {
    return "-" + Math.abs(nums).toLocaleString("eu-AU");
  } else {
    return "" + Math.abs(nums).toLocaleString("eu-AU");
  }
};
