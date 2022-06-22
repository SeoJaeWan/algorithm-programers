const n = 4;
const costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];

function solution(n, costs) {
  var answer = 0;

  const dist = Array.from(new Array(n), (_, i) => i);
  costs.sort((a, b) => a[2] - b[2]);

  for (const [src, desc, cost] of costs) {
    dist[src] = src;
    dist[desc] = src;
  }

  return answer;
}

solution(n, costs);
