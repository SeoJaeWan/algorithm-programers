const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

// 4 3 1 1

function solution(board, moves) {
  var answer = 0;

  const basket = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const index = board[i][move - 1];

      if (index) {
        if (basket[basket.length - 1] === index) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(index);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}

console.log(solution(board, moves));
