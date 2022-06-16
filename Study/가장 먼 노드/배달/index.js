const road = [[1, 1, 1]];
const N = 1;
const K = 3;

function solution(N, road, K) {
  const graph = Array.from(Array(N + 1), () => []);

  for (const [src, desc, value] of road) {
    graph[src].push([desc, value]);
    graph[desc].push([src, value]);
  }

  const dist = Array(N + 1).fill(-1);
  dist[1] = 0;

  const queue = [1];

  while (queue.length > 0) {
    const src = queue.shift();

    for (const [desc, value] of graph[src]) {
      const point = dist[src] + value;
      if (dist[desc] === -1 || dist[desc] > point) {
        dist[desc] = point;
        queue.push(desc);
      }
    }
  }

  return dist.filter((data) => data !== -1 && data <= K).length;
}

solution(N, road, K);
