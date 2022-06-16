const number = "4177252841";
const k = 4;

function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const ch = number[i];

    while (count < k && stack[stack.length - 1] < ch) {
      stack.pop();
      count++;
    }

    stack.push(ch);
  }

  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join("");
}
solution(number, k);
