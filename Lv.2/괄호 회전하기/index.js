const s = "[)(]";

function solution(s) {
  let answer = 0;
  let arrStr = s.split("");
  const rule = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (let i = 0; i < arrStr.length; i++) {
    arrStr.push(arrStr.shift());
    let stack = [arrStr[0]];

    for (let j = 1; j < arrStr.length; j++) {
      if (rule[stack[stack.length - 1]] === arrStr[j]) {
        stack.pop();
      } else {
        stack.push(arrStr[j]);
      }
    }

    if (stack.length === 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(s));
