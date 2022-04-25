const s = "zyxvutxrrxtuvxyz";

function solution(s) {
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  const check = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < check.length; i++) {
    const split = s.split(`${check[i] + check[i]}`);
    s = split.join("");

    if (s.length === 0) {
      break;
    }

    if (split.length >= 2) {
      i = -1;
    }
  }

  return s.length === 0 ? 1 : 0;
}

console.log(solution(s));
