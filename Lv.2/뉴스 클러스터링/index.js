const str1 = "FRANCE";
const str2 = "french";
const str3 = "handshake";
const str4 = "shake hands";

//   ha an nd ds sh ha ak ke
//   sh ha ak ke ha an nd ds

function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const reg = /[^a-z]/gi;

  let str1Obj = {};
  let str2Obj = {};
  let interArr = [];

  for (let i = 0; i < str1.length - 1; i++) {
    let value = str1.slice(i, i + 2).replace(reg, "");

    if (value.length === 2) {
      str1Obj[value] ? str1Obj[value]++ : (str1Obj[value] = 1);
      interArr.push(value);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let value = str2.slice(i, i + 2).replace(reg, "");

    if (value.length === 2) {
      str2Obj[value] ? str2Obj[value]++ : (str2Obj[value] = 1);
      interArr.push(value);
    }
  }

  const caseSet = new Set(interArr);

  let inter = 0;
  let union = 0;

  caseSet.forEach((element) => {
    let value1 = str1Obj[element] ? str1Obj[element] : 0;
    let value2 = str2Obj[element] ? str2Obj[element] : 0;

    inter += Math.min(value1, value2);
    union += Math.max(value1, value2);
  });

  return parseInt(
    (inter === 0 ? (str1 === str2 ? 1 : 0) : inter / union) * 65536
  );
}

solution(str1, str2);

let a1 = [1, 1, 2, 2, 3];
let a2 = [1, 2, 2, 4, 5];
