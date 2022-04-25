const s = "baabaa";

function solution(s) {
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      s = s.split(`${s[i] + s[i + 1]}`).join("");
      i -= 2;
    }
  }

  return s.length === 0 ? 1 : 0;
}

console.log(solution(s));
