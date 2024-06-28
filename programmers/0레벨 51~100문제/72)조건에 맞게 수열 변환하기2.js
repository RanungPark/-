function solution(arr) {
  let x = 0;
  let tmp = arr

  while (1) {
    arr = arr.map(v => {
      if (v >= 50 && v % 2 === 0) {
        return v / 2;
      } else if (v < 50 && v % 2 === 1) {
        return v * 2 + 1;
      } else {
        return v
      }
    })
    if (tmp.toString() === arr.toString()) {
      break;
    } else {
      x++;
      tmp = arr
    }
  }
  return x;
}

// function solution(arr) {
//   let x = 0;
//   let arrx = [arr];
//   while(JSON.stringify(arrx[x-1]) !== JSON.stringify(arrx[x])) {
//       x++;
//       arr = arr.map(v => (v>=50 && v%2===0) ? v/2 : (v<50 && v%2!==0) ? v*2+1 : v);
//       arrx.push(arr);
//   }
//   return x-1;
// }