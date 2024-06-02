function solution(arr, queries) {
  const result = []

  for(let query of queries) {
      const s = query[0];
      const e = query[1];
      const k = query[2];
      
      const num = []
      for(let i = s; i <= e; i++) {
          if(arr[i] > k) num.push(arr[i]);
      }
      
      if(num.length === 0) result.push(-1);
      else result.push(Math.min(...num));
  }
  return result
}