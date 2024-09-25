function solution(citations) {
  const sortCitaions = citations.sort((a, b) => b - a);

  let hIndex = 0;

  for (let i = 0; i < sortCitaions.length; i++) {
    if (sortCitaions[i] >= i + 1) {
      hIndex = i + 1;
    } else break;
  }

  return hIndex;
}
