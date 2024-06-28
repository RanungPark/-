function solution(date1, date2) {
  const answer_date1 = new Date(date1)
  const answer_date2 = new Date(date2)
  return +(answer_date1 < answer_date2)
}