class Permutation {
  constructor() {
    this.set = new Set();
  }

  setPermutation(value, others) {
    if (value !== '') {
      this.set.add(value);
    }

    for (let i = 0; i < others.length; i++) {
      const remove = others.substr(0, i) + others.substr(i + 1);
      this.setPermutation(value + others[i], remove);
    }
  }

  maxNum() {
    return Math.max(...this.set);
  }

  Eratos() {
    const max = this.maxNum();
    const arr = Array(max + 1).fill(true);
    arr[0] = arr[1] = false;

    for (let i = 2; i <= max; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= max; j += i) {
          arr[j] = false;
        }
      }
    }

    return arr;
  }
}

function solution(numbers) {
  const permutation = new Permutation();
  permutation.setPermutation('', numbers);

  const isPrime = permutation.Eratos();

  return [...permutation.set].filter(v => isPrime[v]).length;
}

console.log(solution('011'));
