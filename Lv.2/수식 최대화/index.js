const expression = "-100-100-100-100-100";

// 100-200 * 300-500+200
// 100-200  300-500 + 200
// -100 * -200 + 200
// -100 * 0

// 100 + 200 + 300
// 1 2 3 4 5
// 1

function formula(expression, check, index) {
  if (index === 3) {
    return parseInt(expression);
  }

  const expArr = expression.split(check[index]);

  let point = 0;

  let sum = expArr[0];

  if (sum) {
    sum = formula(expArr[0], check, index + 1);
  } else {
    sum = -formula(expArr[1], check, index + 1);
    point++;
  }

  for (let i = 1 + point; i < expArr.length; i++) {
    const value = formula(expArr[i], check, index + 1);

    switch (check[index]) {
      case "*":
        sum *= value;
        break;
      case "-":
        sum -= value;
        break;
      case "+":
        sum += value;
        break;
    }
  }

  return sum;
}

function solution(expression) {
  var answer = 0;

  const form = ["+", "-", "*"];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      const check = [form[i], form[(i + 1 + j) % 3], form[(i + 2 - j) % 3]];

      answer = Math.max(answer, Math.abs(formula(expression, check, 0)));
    }
  }

  return answer;
}

solution(expression);
