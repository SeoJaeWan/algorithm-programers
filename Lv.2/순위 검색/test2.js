const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

const makeMap = (map, key, score, index) => {
  const joinKey = key.join(" ");
  const value = map[joinKey];

  if (value) {
    map[joinKey].push(score);
  } else {
    map[joinKey] = [score];
  }

  for (let i = index; i < key.length; i++) {
    let combiArr = [...key];
    combiArr[i] = "-";

    makeMap(map, combiArr, score, i + 1);
  }
};

const binarySort = (answer, map, key, score) => {
  const joinKey = key.join(" ");

  const list = map[joinKey];

  if (list) {
    let start = 0;
    let end = list.length;

    while (start < end) {
      let check = Math.floor((start + end) / 2);

      if (parseInt(list[check]) >= parseInt(score)) {
        end = check;
      } else {
        start = check + 1;
      }
    }

    answer.push(list.length - start);
  } else {
    answer.push(0);
  }
};

function solution(info, query) {
  var answer = [];

  let map = {};

  for (let i = 0; i < info.length; i++) {
    const arr = info[i].split(" ");
    const score = arr.pop();

    makeMap(map, arr, score, 0);
  }

  for (const item in map) {
    map[item].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    const arr = query[i].split("and ").join("").split(" ");
    const score = arr.pop();

    binarySort(answer, map, arr, score);
  }

  return answer;
}

console.log(solution(info, query));
