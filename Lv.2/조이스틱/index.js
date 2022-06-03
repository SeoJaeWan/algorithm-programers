let name = "AACAAB";

let eng = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function changeStick(goal) {
  let current = 1;
  while (true) {
    if (eng[current] === goal) {
      return current;
    }
    current++;
  }
}

function moveStick(current, name) {
  let left = 1;
  let right = 1;

  if (current === name.length - 1) {
    return [current, 0];
  }

  while (right + current !== name.length - 1) {
    if (name[right + current] !== "A") {
      break;
    }

    right++;
  }

  while (true) {
    if (right + current === (name.length + current - left) % name.length) {
      break;
    }

    left++;
  }

  return [
    right + current - 1,
    name[right + current] !== "A" ? Math.min(left, right) : 0,
  ];
}

function solution(name) {
  var answer = 0;
  let count = 0;

  for (let i = 0; i < name.length; i++) {
    let GOAL = name[i];

    if (GOAL !== "A") {
      let up = changeStick(GOAL);

      // console.log(Math.min(up, eng.length - up));

      answer += Math.min(up, eng.length - up);
    }

    let move = moveStick(i, name);

    count += move[1];
    i = move[0];
    answer += move[1];
  }

  console.log(count);

  return answer;
}
// RABAMATAWADLAFAVAAE
// 9 2 1 2 12 2 7 2 4 2 3 1 11 2 5 2 5 3 4
// LOAAAHAJAAFAEBAWO
// 1 4 2 3 2 1 2 1
// move가 2가 더 많음
// 5 7 10 12 13 15 16
console.log(solution(name), "???");
