var removeDuplicates = function (nums) {
  if (nums.length < 0) return false;
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[x]) {
      nums[x + 1] = nums[i];
      x = x + 1;
    }
  }
  return x + 1;
};
