function formula(expression, check, index) {
  if (index === 3) {
    return Math.abs(parseInt(expression));
  }

  const value = expression.split(check[index]);

  const reg = /[*\-+]/g;

  let sum = 0;

  for (let i = 0; i < value.length - 1; i++) {
    const left = sum ? sum : parseInt(value[i].split(reg).pop());
    const right = parseInt(value[i + 1].split(reg).shift());

    const text = left + check[index] + right;

    switch (check[index]) {
      case "*":
        sum = left * right;
        break;
      case "-":
        sum = left - right;
        break;
      case "+":
        sum = left + right;
        break;
    }

    expression = expression.replace(text, sum);
  }

  return formula(expression, check, ++index);
}

function solution(expression) {
  var answer = 0;

  const form = ["+", "-", "*"];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      const check = [form[i], form[(i + 1 + j) % 3], form[(i + 2 - j) % 3]];

      answer = Math.max(answer, formula(expression, check, 0));
    }
  }

  console.log(answer);

  return answer;
}
