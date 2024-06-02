function solution(bin1, bin2) {
  const p_bin1 = parseInt(bin1, 2)
  const p_bin2 = parseInt(bin2, 2)
  const pareint = p_bin1 + p_bin2;
  return pareint.toString(2);
}