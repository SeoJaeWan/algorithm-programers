const s = "(())()";

function solution(s) {
  const RULE = {
    "(": ")",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (RULE[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}

console.log(solution(s));
