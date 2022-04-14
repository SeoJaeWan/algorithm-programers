const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

function solution(id_list, report, k) {
  const check = Array.from(new Array(id_list.length), () => new Array());
  const realReport = [...new Set(report)];

  for (const item of realReport) {
    const value = item.split(" ");
    const index = id_list.indexOf(value[1]);

    check[index].push(value[0]);
  }

  let answer = new Array(id_list.length).fill(0);

  for (const item of check) {
    if (item.length >= k) {
      for (const innerItem of item) {
        answer[id_list.indexOf(innerItem)] += 1;
      }
    }
  }

  return answer;
}
const t0 = performance.now();
solution(id_list, report, k);
const t1 = performance.now();
console.log(t1 - t0, "milliseconds");
