function solution(score) {
  return score.map(el => {
    return (
      score.filter(v => v[0] + v[1] > el[0] + el[1]).length + 1
    );
  });
}

// 한번더 보기