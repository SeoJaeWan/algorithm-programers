let n = 10;

function solution(n) {
  let answer = "0";
  let Lang = ["1", "2", "4"];

  for (let i = 0; i < n; i++) {
    answer = (parseInt(answer) + 1).toString();

    for (let j = 1; j <= answer.length; j++) {
      let current = parseInt(answer[answer.length - j]);
      let prev = answer[answer.length - (j + 1)];

      if (current === 4) {
        answer = answer.replace(
          `${prev ? prev : ``}` + `${current}`,
          `${parseInt(prev ? prev : 0) + 1}` + `1`
        );
      }
    }
  }

  let result = "";

  for (let i = answer.length - 1; i >= 0; i--) {
    result = Lang[parseInt(answer[i] - 1)] + result;
  }

  return result;
}

const t0 = performance.now();
console.log(solution(n));
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");
