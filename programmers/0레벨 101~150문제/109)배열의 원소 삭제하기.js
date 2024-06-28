function solution(arr, delete_list) {
  let result = arr

  for (const list of delete_list) {
    result = result.filter(v => v !== list)
  }

  return result
}