let n = 500000000;
//  41 10
//  42 11
//  44 12
//  111 13
//  112 14
//  114 15
//  121 16
//  122 17
//  124 18
//  141 19
//  142 20
//  144 21
//  211 22
//  212 23
function solution(n) {
  const LANG = [1, 2, 4];

  let check = parseInt(n % 3 === 0 ? n / 3 : n / 3 + 1);

  let temp = n - (check - 1) * 3 - 1;
  let baseArray = [0];

  let test = 0;

  for (let i = 1; i < check; i++) {
    baseArray[0] += 1;

    for (let j = 0; j < baseArray.length; j++) {
      if (baseArray[j] === 4) {
        if (baseArray[j + 1]) {
          baseArray[j + 1] += 1;
        } else {
          baseArray.push(1);
        }
        baseArray[j] = 1;
      }
      test++;
    }

    test++;
  }

  let result = "";

  console.log(baseArray);

  baseArray.reverse();

  if (!(baseArray[0] === 0 && baseArray.length === 1)) {
    for (let i = 0; i < baseArray.length; i++) {
      result = result + LANG[baseArray[i] - 1];
      test++;
    }
  }
  console.log(test);

  return result + LANG[temp];
}

const t0 = performance.now();
console.log(solution(n));
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");
// for (let i = 1; i <= 25; i++) {
//   console.log(i, " = ", solution(i));
// }
