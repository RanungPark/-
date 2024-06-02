function solution(array) {
  const arr = []

  for (const v of array) {
    const foundObj = arr.find(obj => obj.key === v)

    if (foundObj === undefined) {
      arr.push({ key: v, count: 1 })
    } else {
      foundObj.count++
    }
  }

  arr.sort((a, b) => b.count - a.count)

  return arr[0].count === arr[1]?.count ? -1 : arr[0].key
}
