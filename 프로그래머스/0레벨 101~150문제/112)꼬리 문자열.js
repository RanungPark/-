function solution(str_list, ex) {
  return str_list.filter(r => !r.includes(ex)).join('')
}