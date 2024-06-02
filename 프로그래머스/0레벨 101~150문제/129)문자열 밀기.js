function solution(A, B) {
  let count = 0;
  let tmp = [...A]

  if (A === B) return count

  for (let i in A) {
    count++
    let pop = tmp.pop()
    tmp = [pop, ...tmp]
    if (tmp.join('') === B) {
      break
    }
  }

  return A.length === count ? -1 : count;
}

