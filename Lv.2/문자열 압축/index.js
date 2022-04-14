const s1 = "aabbaccc"; /////////////////// 7
const s2 = "abcabcabcabcdededededede"; /// 14
const s3 = "xababcdcdababcdcd"; ////////// 17

function solution(s) {
  const check = s.length / 2;
  let minNum = s.length;

  for (let i = 1; i <= check; i++) {
    let index = 0;
    let preV = 1;
    let preT = "";
    let result = "";
    for (let j = 0; j < s.length / i; j++) {
      let current = s.slice(index, index + i);

      if (preT === current) {
        preV++;
      } else {
        result += (preV !== 1 ? preV : "") + preT;
        preT = current;
        preV = 1;
      }

      index = j * i + i;
    }

    result += (preV !== 1 ? preV : "") + preT;
    minNum = Math.min(result.length, minNum);
  }

  return minNum;
}

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
