const n = 7;

// 2 => 2
// 3 => 3
// 4 => 5
// 5 => 8

function solution(n) {
  let preV = 0;
  let nextV = 1;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer = (preV + nextV) % 1000000007;
    preV = nextV;
    nextV = answer;
  }

  return answer;
}

solution(n);
