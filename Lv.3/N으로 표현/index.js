const N = 5;
const number = 55555555;

function solution(N, number) {
  let answer = -1;
  const set = Array.from(new Array(9), () => new Set());

  for (let i = 1; i <= 8; i++) {
    set[i].add(parseInt(N.toString().repeat(i)));

    for (let j = i; j > 0; j--) {
      for (let item of set[i - j]) {
        for (let item2 of set[j]) {
          set[i].add(parseInt(item + item2));
          set[i].add(parseInt(item - item2));
          set[i].add(parseInt(item * item2));
          set[i].add(parseInt(item / item2));
        }
      }
    }

    if (set[i].has(number)) {
      answer = i;
      break;
    }
  }

  return answer;
}

solution(N, number);

5;

// 5 + 5  5 * 5  5 / 5  5 - 5
// 5 + 5 + 5  5 + 5 - 5
