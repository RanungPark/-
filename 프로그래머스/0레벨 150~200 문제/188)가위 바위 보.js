function solution(rsp) {
  const rsp_arr = [...rsp];
  const answer = rsp_arr.map(v => {
    if (v === '0') return 5
    else if (v === '2') return 0
    else if (v === '5') return 2
  })

  return answer.join('');
}