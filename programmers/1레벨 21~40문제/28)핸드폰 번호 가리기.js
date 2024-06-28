function solution(phone_number) {
  const change_number = [...phone_number].map((v, i) => {
    if (phone_number.length - 5 >= i) return "*"
    else return v
  })
  return change_number.join('')
}