let maps = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const loop = (answer, maps, index, position) => {
  const [x, y] = position;
  const minState = Math.min(...answer);

  if (x === maps.length - 1 && y === maps[0].length - 1) {
    answer.push(index);
    return;
  } else if (minState < index) {
    return;
  }

  const currentMap = maps.map((data) => data.map((item) => item));

  currentMap[x][y] = 0;

  if (y + 1 < maps[0].length && currentMap[x][y + 1]) {
    loop(answer, currentMap, index + 1, [x, y + 1]);
  }
  if (y - 1 >= 0 && currentMap[x][y - 1]) {
    loop(answer, currentMap, index + 1, [x, y - 1]);
  }
  if (x + 1 < maps.length && currentMap[x + 1][y]) {
    loop(answer, currentMap, index + 1, [x + 1, y]);
  }
  if (x - 1 >= 0 && currentMap[x - 1][y]) {
    loop(answer, currentMap, index + 1, [x - 1, y]);
  }
};

function solution(maps) {
  var answer = [];

  loop(answer, maps, 1, [0, 0]);

  return answer.length === 0 ? -1 : Math.min(...answer);
}
