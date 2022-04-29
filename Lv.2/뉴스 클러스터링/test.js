const str1 = "aa1+aa2";
const str2 = "bb";
const str3 = "E!@#=M*C^2";
const str4 = "d=m*c^2";

//   ha an nd ds sh ha ak ke
//   sh ha ak ke ha an nd ds

function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1 === str2) {
    return 65536;
  }

  const reg = /[^a-z]/gi;

  let str1Obj = {};
  let str2Obj = {};
  let str1Arr = [];
  let str2Arr = [];

  for (let i = 0; i < str1.length - 1; i++) {
    let value = str1.slice(i, i + 2).replace(reg, "");

    if (value.length === 2) {
      str1Obj[value] ? str1Obj[value]++ : (str1Obj[value] = 1);
      str1Arr.push(value);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let value = str2.slice(i, i + 2).replace(reg, "");

    if (value.length === 2) {
      str2Obj[value] ? str2Obj[value]++ : (str2Obj[value] = 1);
      str2Arr.push(value);
    }
  }

  let interArr = [...new Set(str1Arr.filter((v) => str2Arr.includes(v)))];
  const interObj = {};

  let inter = 0;
  let total = 0;

  for (let i = 0; i < interArr.length; i++) {
    let min = Math.min(str1Obj[interArr[i]], str2Obj[interArr[i]]);
    interObj[interArr[i]] = min;

    inter += min;
  }

  Object.keys(str1Obj).forEach((v) => {
    total += (str1Obj[v] ? str1Obj[v] : 0) - (interObj[v] ? interObj[v] : 0);
  });

  Object.keys(str2Obj).forEach((v) => {
    total += (str2Obj[v] ? str2Obj[v] : 0) - (interObj[v] ? interObj[v] : 0);
  });

  return inter === 0 ? 0 : parseInt((inter / (total + inter)) * 65536);
}

console.log(solution(str3, str4));

let a1 = [1, 1, 2, 2, 3];
let a2 = [1, 2, 2, 4, 5];
