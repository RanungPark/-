function solution(nums) {
  //     const nums_sum = nums.reduce((a,c) => a+c , 0)

  //     let arr = Array(nums_sum).fill(1);

  //     arr[0] = arr[1] = 0

  //     for(let i = 2; i < nums_sum + 1; i++) {
  //         if(arr[i] === 0) continue;
  //         for(let j = i+i; j< nums_sum + 1; j+=i) {
  //             arr[j] = 0;
  //         }
  //     }
  //     arr = arr.map((v,i) => {
  //         if(v) {return i}
  //     }).filter(v => v)

  let result = 0
  const addNums = []
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        addNums.push(nums[i] + nums[j] + nums[k])
      }
    }
  }

  addNums.forEach(num => {
    let isSosu = true
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
        isSosu = false
    }
    result += isSosu ? 1 : 0
  })

  return result
}
