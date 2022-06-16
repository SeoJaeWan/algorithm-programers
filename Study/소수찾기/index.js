const n = 10;

function solution(n) {
  const primes = [false, false, ...Array(n - 1).fill(true)];

  for (let i = 0; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i + i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.filter(Boolean);
}
solution(n);
