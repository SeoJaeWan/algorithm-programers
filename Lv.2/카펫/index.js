const brown = 24;
const yellow = 24;

function solution(brown, yellow) {
  var answer = [];

  const arr = [];
  const total = brown + yellow;

  for (i = 1; i <= brown + yellow; i++) {
    if (total % i === 0 && i >= total / i) {
      arr.push([i, total / i]);
    }
  }

  for (const [x, y] of arr) {
    if (x * 2 + (y - 2) * 2 === brown) {
      return [x, y];
    }
  }

  return answer;
}

console.log(solution(brown, yellow));
