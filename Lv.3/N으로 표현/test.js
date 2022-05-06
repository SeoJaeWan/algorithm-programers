const N = 5;
const number = 12;

function formula(N, expression, array) {
  const type = ["*", "+", "-", "/"];
  const before = expression[expression.length - 1];
  const open = expression.split("(").length;
  const close = expression.split(")").length;

  if (expression.split(N).length > 8) {
    return;
  } else if (!type.includes(before)) {
    const exp = expression.split(N);
    // console.log(expression, "1111111111111");
    array.push(expression.replace(exp.pop(), ""));
    // console.log(expression, "2222222222");
  }

  if (before === N)
    for (let i = 0; i < type.length; i++) {
      formula(N, expression + type[i], array);
    }

  if (before !== ")") formula(N, expression + N, array);

  if (open === close) {
    if (before !== N && before !== ")") {
      if (expression === "5*5*5*5*(5*5") {
        console.log("????");
      }
      formula(N, expression + "(", array);
    }
  } else if (before !== "(" && !type.includes(before)) {
    formula(N, expression + ")", array);
  }
}

function solution(N, number) {
  var answer = 0;
  let value = { "+": 1, "-": 2, "*": 3, "/": 4, "(": 5, ")": 0 };
  let arr = [];

  formula(N.toString(), "5", arr);

  arr = [...new Set(arr)];

  console.log(arr.length, arr);

  for (let i = 4999; i < 5000; i++) {
    const reg = /[*\-()\/+]/g;
    const reg2 = /[^*\-()\/+]/g;
    let exp = "5+5*5+(5+5-55/5)";
    const open = exp.split("(").length;
    const close = exp.split(")").length;

    if (open !== close) {
      exp += ")";
      exp = exp.replace("()", "");
    }
    const num = exp.split(reg).filter((data) => data);
    const ex = exp.split(reg2).join("").split("");

    console.log(num, ex, exp);

    const stack = [];
    for (let j = 0; j < ex.length; j++) {
      const num1 = num[j];
      const num2 = num[j + 1];

      const next = ex[j + 1];

      if (value[ex[j]] >= ex[j + 1]) {
        let sum = 0;
        switch (ex[j]) {
          case "+":
            sum = num1 + num2;
            break;
          case "-":
            sum = num1 - num2;
            break;
          case "*":
            sum = num1 * num2;
            break;
          case "/":
            sum = parseInt(num1 / num2);
            break;
        }
      }
    }
  }
  // 5+5*5+(5+5-55/5)
  // 5 + 5
  // 5 + 5 *
  // 5 * 5 (
  // 5 + 5 - 10
  // 10 - 55 /
  // 55 / 5  11

  // 10 - 11

  return answer;
}

solution(N, number);

let i = 10;
