const N = 5;
const number = 12;

// 연속된 괄호
function changeIntoPost(expression) {
  const stack = [];
  let postfixString = [];
  let temp = "";

  for (let i = 0; i < expression.length; i++) {
    let ch = expression[i];

    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      let oper = stack.pop();
      postfixString.push(temp);
      while (stack.length !== 0 && oper !== "(") {
        postfixString.push(oper);
        oper = stack.pop();
      }
      temp = "";
    } else if (ch === "+" || ch === "-") {
      if (stack.length === 0) {
        postfixString.push(temp);
        stack.push(ch);
        temp = "";
      } else {
        postfixString.push(temp);
        while (stack.length !== 0) {
          let oper = stack.pop();

          if (oper === "(") {
            stack.push(oper);
            break;
          }
          postfixString.push(oper);
        }

        temp = "";
        stack.push(ch);
      }
    } else if (ch === "*" || ch === "/") {
      if (stack.length === 0) {
        postfixString.push(temp);
        stack.push(ch);
        temp = "";
      } else {
        postfixString.push(temp);
        while (stack.length !== 0) {
          let oper = stack.pop();

          if (oper === "(" || oper === "+" || oper === "-") {
            stack.push(oper);
            break;
          }
          postfixString.push(oper);
        }

        temp = "";
        stack.push(ch);
      }
    } else {
      temp += ch;
    }
  }

  postfixString.push(temp);

  while (stack.length !== 0) {
    let oper = stack.pop();

    if (oper === "(") {
      stack.push(oper);
      break;
    }
    postfixString.push(oper);
  }

  return postfixString.filter((data) => data);
}

function evalPostfix(expression, number, N) {
  let exp = changeIntoPost(expression);

  let stack = [];

  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < exp.length; i++) {
    ch = exp[i];
    console.log(stack);

    if (ch === "+" || ch === "-" || ch === "*" || ch === "/") {
      num2 = parseInt(stack.pop());
      num1 = parseInt(stack.pop());

      switch (ch) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          stack.push(parseInt(num1 / num2));
          break;
      }
    } else {
      stack.push(ch);
    }
  }

  let test = stack.pop();

  if (number === test) {
    return expression.split(N).length;
  } else {
    return 999;
  }
}

function formula(N, expression, array) {
  const type = ["*", "+", "-", "/"];
  const before = expression[expression.length - 1];
  const open = expression.split("(").length;
  const close = expression.split(")").length;

  console.log(expression);

  if (expression.split(N).length > 8) {
    return;
  } else if (!type.includes(before)) {
    const exp = expression.split(N);
    const exp2 = expression.split(N);
    if ("(55+5)/" === expression)
      console.log(
        expression,
        expression.replace(exp2.pop(), ""),
        "asjndjklasndljk"
      );

    array.push(expression.replace(exp.pop(), ""));
  }

  if (before === N || before === ")")
    for (let i = 0; i < type.length; i++) {
      formula(N, expression + type[i], array);
    }

  if (before !== ")") formula(N, expression + N, array);

  if (open === close) {
    if (before !== N && before !== ")") {
      formula(N, expression + "(", array);
    }
  } else if (before !== "(" && !type.includes(before)) {
    formula(N, expression + ")", array);
  }
}

function solution(N, number) {
  var answer = 999;

  let arr = [];

  let strN = N.toString();

  formula(strN, "", arr);

  arr = [...new Set(arr)];

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let exp = arr[i];

    const open = exp.split("(").length;
    const close = exp.split(")").length;

    if (open !== close) {
      exp += ")";
      exp = exp.replace("()", "");
    }

    if (exp === "5/(55+5)") {
      console.log("???", evalPostfix("5/(55+5)", number, N));
    }
    // answer = Math.min(answer, evalPostfix(exp, number, N));
  }

  // 5+5*5+(5+5-55/5)
  // 5 + 5
  // 5 + 5 *
  // 5 * 5 (
  // 5 + 5 - 10
  // 10 - 55 /
  // 55 / 5  11

  // 10 - 11

  console.log(answer);

  return answer;
}

solution(N, number);
// solution(N, number);

let i = 10;
