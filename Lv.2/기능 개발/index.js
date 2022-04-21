const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
const progresses2 = [1, 1, 1];
const speeds2 = [30, 30, 10];
const progresses3 = [96, 94];
const speeds3 = [3, 3];

function solution(progresses, speeds) {
  var answer = [];
  const success = [];

  let lastIndex = 0;

  for (let i = 0; success.length !== progresses.length; i++) {
    for (let j = 0; j < progresses.length; j++) {
      if (progresses[j] >= 100 && !success.includes(j)) {
        success.push(j);
      } else {
        progresses[j] += speeds[j];
      }
    }

    if (success.includes(lastIndex)) {
      let count = 0;

      for (let i = lastIndex; i < success.length; i++) {
        if (success.includes(i)) {
          count++;

          if (i === success.length - 1) {
            lastIndex = success.length;
          }
        } else {
          lastIndex = i;
          break;
        }
      }

      answer.push(count);
    }
  }

  return answer;
}
const t0 = performance.now();
console.log(solution(progresses, speeds));
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");
