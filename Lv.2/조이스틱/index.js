let name = "BBAAABAAAAAAAAAAAABA";

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

function upStick(goal) {
  let current = 1;
  while (true) {
    if (eng[current] === goal) {
      return current;
    }
    current++;
  }
}

function downStick(goal) {
  let current = 1;

  while (true) {
    if (eng[eng.length - current] === goal) {
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

  return [right + current - 1, Math.min(left, right)];
}

function solution(name) {
  var answer = 0;

  for (let i = 0; i < name.length; i++) {
    let GOAL = name[i];

    if (GOAL !== "A") {
      let up = upStick(GOAL);

      let down = downStick(GOAL);

      answer += Math.min(up, down);
    }

    let move = moveStick(i, name);
    console.log(answer, move);

    i = move[0];
    answer += move[1];
  }

  return answer;
}

console.log(solution(name));
