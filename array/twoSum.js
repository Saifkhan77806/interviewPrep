var twoSum2 = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        break;
      } else {
        if (nums[i] + nums[j] === target) {
          result.push(i);
          result.push(j);
        }
        console.log(
          `${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]} (Index = ${result})`,
        );
      }
    }
  }
};

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
// twoSum([3,2,4], 6)
