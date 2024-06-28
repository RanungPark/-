function solution(dots) {
  const inclination = []
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      inclination.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]))
    }
  }

  let parallel = 5;
  let result = 0
  for (let i = 0; i < 3; i++) {
    if (inclination[i] === inclination[parallel]) result = 1
    parallel--
  }

  return result
}

