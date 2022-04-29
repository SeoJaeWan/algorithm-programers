const p = "(()())()";

function checkTrueString(p) {
  let checkArr = [p[0]];

  for (let i = 1; i < p.length; i++) {
    if (checkArr[checkArr.length - 1] === "(" && p[i] === ")") {
      checkArr.pop();
    } else {
      checkArr.push(p[i]);
    }
  }

  return checkArr.length === 0;
}

function looper(p) {
  if (p === "") {
    return "";
  }

  if (checkTrueString(p)) {
    return p;
  }

  const left = [];
  const right = [];

  let u = "";
  let v = "";

  for (let i = 0; i < p.length; i++) {
    if (p[i] === ")") {
      left.push(p[i]);
    } else {
      right.push(p[i]);
    }

    if (left.length === right.length) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1, p.length);

      break;
    }
  }

  let value = "";

  if (checkTrueString(u)) {
    value = u + looper(v);
  } else {
    let change = "";

    for (let i = 1; i < u.length - 1; i++) {
      change = change + (u[i] === ")" ? "(" : ")");
    }

    value = "(" + looper(v) + ")" + change;
  }

  return value;
}

function solution(p) {
  var answer = "";

  answer = looper(p);

  return answer;
}

solution(p);
