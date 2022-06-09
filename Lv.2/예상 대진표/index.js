let n = 16;
let a = 3;
let b = 6;

// 16 1 2  5 6
// 16 1 2  3 4
// 8  1 2

// 16 3 6
//  8 2 3
//  4 1 2

//16  1 2  3 4  5 6  7 8  9 10  11 12  13 14  15 16  1
// 8  1    2    3    4    5      6      7      8     2
// 4  1         2         3             4            3
// 2  1                   2                          4

// 16 1 15
// 16 1 8
// 8 1 4
// 4 1 2
// 2 1 2

// 8 4 8
// 4 2 4
// 2 1 2

// 8 1 7
// 4 2 4
// 2 1 2

// 8 2 8
// 4 2 4
// 2 1 2

// 8 2 4
// 4 1 2

// 8 1 5
// 4 1 3
// 2 1 2

// 8 5 7
// 4 3 4

// 8 3 5
// 4 2 3

function solution(n, a, b) {
  let first = a;
  let second = b;

  if (b < a) {
    let temp = first;
    first = second;
    second = temp;
  }

  for (let i = 1; true; i++) {
    n = n / 2;
    if (first % 2 !== 0 && second - 1 === first) {
      return i;
    }

    first = first % 2 === 0 ? first / 2 : (first + 1) / 2;
    second = second % 2 === 0 ? second / 2 : (second + 1) / 2;
  }
}

console.log(solution(n, a, b));
