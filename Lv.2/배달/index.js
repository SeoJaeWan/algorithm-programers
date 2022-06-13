const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;

function loop(arr, road, goal, current, before, K, count) {
  if (current === goal) {
    arr.push(count);
    return;
  }

  for (let i = 0; i < road.length; i++) {
    const [point1, point2, value] = road[i];
    if (count + value <= K) {
      if (current === point1 && before !== point2) {
        loop(arr, road, goal, point2, point1, K, count + value);
      }
      if (current === point2 && before !== point1) {
        loop(arr, road, goal, point1, point2, K, count + value);
      }
    }
  }
}

function solution(N, road, K) {
  var answer = 1;

  for (let i = 2; i <= N; i++) {
    const arr = [];
    loop(arr, road, i, 1, 1, K, 0);

    if (arr.length !== 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(N, road, K));
