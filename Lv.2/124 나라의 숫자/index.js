let n = 10;
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
function deep(n, a) {
  console.log(a);
  if (n === 0) return;
  a.push(n % 3);

  deep(parseInt(n / 3), a);
}

function solution(n) {
  var answer = "";

  const arr = [];
  deep(n, arr);

  console.log(arr.shift());

  const oneTwoFour = ["4", "1", "2"];

  for (let i = 0; i < arr.length; i++) {
    answer = oneTwoFour[arr[i]] + answer;
  }

  return answer;
}

const t0 = performance.now();
console.log(solution(n));
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");
// for (let i = 1; i <= 25; i++) {
//   console.log(i, " = ", solution(i));

// }
