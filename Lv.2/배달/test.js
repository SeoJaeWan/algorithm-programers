const N = 6;
const road = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
const K = 4;

function solution(N, road, K) {
  // 이동 가능한 모든 경로의 가중치
  const arr = [];

  // 가중치 값
  const max = K + 1;
  // 방문한 최단 거리
  let dist = new Array(N).fill(max);
  // 방문 유무
  const visit = new Array(N).fill(false);

  // 이동 가능한 모든 경로를 기본적으로 가중치로 초기화를 시킨다.
  for (let i = 0; i < N; i++) {
    arr.push([]);
    for (let j = 0; j < N; j++) {
      arr[i].push(max);
    }

    // 자기 자신은 0이기 때문에 0으로 초기화
    arr[i][i] = 0;
  }

  // road를 통해 실제 경로의 가중치를 대입한다.
  for (let i = 0; i < road.length; i++) {
    const [point1, point2, value] = road[i];

    arr[point1 - 1][point2 - 1] = Math.min(arr[point1 - 1][point2 - 1], value);
    arr[point2 - 1][point1 - 1] = Math.min(arr[point2 - 1][point1 - 1], value);
  }

  // 항상 0, 즉 1에서부터 시작하기 때문에 고정시킨다.
  dist[0] = 0;

  for (let i = 1; i < N; i++) {
    let min = max + 1;
    let index = -1;

    for (let j = 0; j < N; j++) {
      console.log(!visit[j], min > dist[j], dist[j]);
      if (!visit[j] && min > dist[j]) {
        min = dist[j];
        index = j;
      }
    }

    visit[index] = true;

    for (let k = 0; k < N; k++) {
      if (
        arr[index][k] < max &&
        !visit[k] &&
        dist[index] + arr[index][k] < dist[k]
      ) {
        dist[k] = dist[index] + arr[index][k];
      }
    }
  }

  dist = dist.filter((data) => data <= K);

  return dist.length;
}

console.log(solution(N, road, K));
