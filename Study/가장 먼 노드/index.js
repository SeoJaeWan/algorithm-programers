const n = 6;
const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
  [1, 6],
];

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const dist = Array(n + 1).fill(0);
  dist[1] = 1;

  const queue = [1];

  while (queue.length > 0) {
    const src = queue.shift();

    for (const dest of graph[src]) {
      if (dist[dest] === 0) {
        dist[dest] = dist[src] + 1;
        queue.push(dest);
      }
    }
  }

  const max = Math.max(...dist);
  return dist.filter((item) => item === max).length;
}

solution(n, edge);
