function solution(s, n) {
  const result = [...s].map(v => {
    const ascii = v.charCodeAt();
    const a = 'a'.charCodeAt();
    const A = 'A'.charCodeAt();
    const z = 'z'.charCodeAt();
    const Z = 'Z'.charCodeAt();

    if (A <= ascii && ascii <= Z) {
      return String.fromCharCode((ascii + n - A) % 26 + A)
    } else if (a <= ascii && ascii <= z) {
      return String.fromCharCode((ascii + n - a) % 26 + a)
    }

    return ' '
  })
  return result.join('')
}