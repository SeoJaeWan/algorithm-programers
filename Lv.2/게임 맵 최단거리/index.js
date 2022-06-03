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

function solution(maps) {
  var answer = [[0, 0, 1]];
  let goalX = maps.length - 1;
  let goalY = maps[0].length - 1;

  while (answer.length) {
    // console.log(answer[0]);
    const [x, y, index] = answer[0];
    if (x === goalX && y === goalY) {
      return index;
    }

    if (y + 1 < maps[0].length && maps[x][y + 1]) {
      answer.push([x, y + 1, index + 1]);
      maps[x][y + 1] = 0;
    }
    if (y - 1 >= 0 && maps[x][y - 1]) {
      answer.push([x, y - 1, index + 1]);
      maps[x][y - 1] = 0;
    }
    if (x + 1 < maps.length && maps[x + 1][y]) {
      answer.push([x + 1, y, index + 1]);
      maps[x + 1][y] = 0;
    }
    if (x - 1 >= 0 && maps[x - 1][y]) {
      answer.push([x - 1, y, index + 1]);
      maps[x - 1][y] = 0;
    }

    answer.shift();
  }

  return -1;
}

console.log(solution(maps));
