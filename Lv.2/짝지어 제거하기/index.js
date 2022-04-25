const s = "zyxvutxrrxtuvxyz";

function solution(s) {
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] !== s[i]) {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }

  return arr.length === 0 ? 1 : 0;
}

console.log(solution(s));
