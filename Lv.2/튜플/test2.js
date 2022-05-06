let s = "{{20,111},{111}}";

function solution(s) {
  let array = [];
  let answer = {};

  const reg = /[{}]/g;

  array = s.split(reg).filter((data) => data && data !== ",");
  array.sort((a, b) => a.length - b.length);
  console.log(array);
  array = array.join("").replace(/,/g, "").split("");
  console.log(array, [
    ...array.reduce((set, value) => set.add(parseInt(value)), new Set()),
  ]);

  return [...array.reduce((set, value) => set.add(parseInt(value)), new Set())];
}

solution(s);
