const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const hidden_num = lottos.reduce((cnt, element) => cnt + (element === 0), 0);

  let check = lottos.filter((value) => win_nums.includes(value)).length;

  return [rank[check + hidden_num], rank[check]];
}

const t0 = performance.now();
solution(lottos, win_nums);
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");
