const numbers1 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];

// 7 : 2 L
// 0 : 3 R
// 8 : 2 L
// 2 : 0 L
// 8 :

function solution(numbers, hand) {
  var answer = "";
  const lhand = [1, 4, 7];
  const rhand = [3, 6, 9];
  const chand = [2, 5, 8, 0];

  let currentL = 3;
  let currentR = 3;

  let hiddenL = 0;
  let hiddenR = 0;

  numbers.forEach((element) => {
    if (lhand.includes(element)) {
      answer += "L";
      hiddenL = 0;
      currentL = lhand.indexOf(element);
    } else if (rhand.includes(element)) {
      answer += "R";
      hiddenR = 0;
      currentR = rhand.indexOf(element);
    } else {
      const point = chand.indexOf(element);
      const pL = Math.abs(point - currentL) - hiddenL;
      const pR = Math.abs(point - currentR) - hiddenR;

      if (pL === pR) {
        if (hand === "right") {
          answer += "R";
          hiddenR = 1;
          currentR = point;
        } else {
          answer += "L";
          hiddenL = 1;
          currentL = point;
        }
      } else if (pR < pL) {
        answer += "R";
        hiddenR = 1;
        currentR = point;
      } else {
        answer += "L";
        hiddenL = 1;
        currentL = point;
      }
    }
  });

  return answer;
}

console.log(solution(numbers1, "left"));
