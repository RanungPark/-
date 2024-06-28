function solution(nums) {
  let answer = [...new Set(nums)];
  return nums.length / 2 > answer.length ? answer.length : nums.length / 2;
}