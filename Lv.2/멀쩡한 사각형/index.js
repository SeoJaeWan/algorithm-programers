const w = 3;
const h = 4;

// function solution(w, h) {
//   let num1 = w;
//   let num2 = h;

//   if (num1 < num2) {
//     let tmp = num1;
//     num1 = num2;
//     num2 = tmp;
//   }

//   while (num2 !== 0) {
//     let gcd = num1 % num2;
//     num1 = num2;
//     num2 = gcd;
//   }

//   if (num1 === 1) {
//     return w * h - (w + h - 1);
//   } else {
//     return w * h - (w + h - num1);
//   }
// }

function solution(w, h) {
  const slope = h / w;
  let result = 0;

  console.log(slope);

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope);
  }

  return h * w - result;
}

console.log(solution(w, h));
