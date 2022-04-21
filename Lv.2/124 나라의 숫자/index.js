let n = 9;
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

// 1 2 3
// 1 2 10

// 12

// 1 2 0
// 1 2 4

// 001 1   1
// 002 2   2
// 010 3   0
// 011 4  11
// 012 5  12
// 020 6  10
// 021 7  21
// 022 8  22
// 100 9  20
// 101 10 01

//  10 => 3 => 1
//   1    0    1
//  10 => 3 => 0
//   9 => 2 => 0
function deep(n, a) {
  if (n === 0) return;
  a.push(n % 3);

  deep(parseInt((n - 1) / 3), a);
}
function deep2(n, a) {
  if (n === 0) return;
  console.log(n);
  a.push(n % 3);

  deep2(parseInt(n / 3), a);
}

function solution(n) {
  var answer = "";

  const arr = [];
  const arr2 = [];
  deep(n, arr);
  deep2(n, arr2);

  console.log("arr: ", arr.reverse());
  console.log("arr2: ", arr2.reverse());
  arr2.reverse();
  arr.reverse();

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
