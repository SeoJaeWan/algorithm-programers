const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];

function solution(rows, columns, queries) {
  var answer = [];

  const array = [];

  for (let i = 1; i <= rows; i++) {
    const columnArr = [];
    for (let j = 1; j <= columns; j++) {
      columnArr.push((i - 1) * columns + j);
    }

    array.push(columnArr);
  }

  for (let i = 0; i < queries.length; i++) {
    const turn = queries[i];
    let minNum = 10001;
    let prev = 0;

    for (let j = turn[1]; j <= turn[3]; j++) {
      let temp = array[turn[0] - 1][j - 1];
      if (prev) {
        array[turn[0] - 1][j - 1] = prev;
      }
      minNum = Math.min(minNum, temp);
      prev = temp;
    }

    for (let j = turn[0] + 1; j <= turn[2]; j++) {
      let temp = array[j - 1][turn[3] - 1];
      if (prev) {
        array[j - 1][turn[3] - 1] = prev;
      }
      minNum = Math.min(minNum, temp);
      prev = temp;
    }

    for (let j = turn[3] - 1; j >= turn[1]; j--) {
      let temp = array[turn[2] - 1][j - 1];
      if (prev) {
        array[turn[2] - 1][j - 1] = prev;
      }
      minNum = Math.min(minNum, temp);
      prev = temp;
    }

    for (let j = turn[2] - 1; j >= turn[0]; j--) {
      let temp = array[j - 1][turn[1] - 1];
      if (prev) {
        array[j - 1][turn[1] - 1] = prev;
      }
      minNum = Math.min(minNum, temp);
      prev = temp;
    }

    answer.push(minNum);
  }

  return answer;
}

solution(rows, columns, queries);
