const road = [[1, 2, 2]];
const N = 2;
const K = 1;

function solution(N, road, K) {
  const dist = [0, ...Array(N - 1).fill(Infinity)];
  const visit = [false, ...Array(N - 1).fill(false)];
  const costs = Array.from(new Array(N), () =>
    Array.from(new Array(N), () => Infinity)
  );

  for (let i = 0; i < road.length; i++) {
    costs[road[i][0] - 1][road[i][1] - 1] = Math.min(
      costs[road[i][0] - 1][road[i][1] - 1],
      road[i][2]
    );
    costs[road[i][1] - 1][road[i][0] - 1] = Math.min(
      costs[road[i][1] - 1][road[i][0] - 1],
      road[i][2]
    );
  }

  const queue = [0];

  while (queue.length !== 0) {
    let current = 0;
    let index = 0;
    let point = Infinity;

    for (let j = 0; j < queue.length; j++) {
      const item = queue[j];

      if (point > dist[item]) {
        current = item;
        point = dist[item];
        index = j;
      }
    }

    queue.splice(index, 1);
    visit[current] = true;

    for (let j = 0; j < costs[current].length; j++) {
      const cost = costs[current][j] + point;

      if (cost !== Infinity && cost < dist[j] && !visit[j]) {
        dist[j] = cost;
        queue.push(j);
      }
    }
  }

  return dist.filter((data) => data <= K).length;
}

solution(N, road, K);
