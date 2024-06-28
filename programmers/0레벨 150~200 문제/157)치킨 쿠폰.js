function solution(chicken) {
  let coupon = chicken;
  let buy_chicken = 0;

  while (coupon >= 10) {
    const service = Math.floor(coupon / 10)
    buy_chicken += service
    coupon = coupon % 10 + service
  }

  return buy_chicken
}
