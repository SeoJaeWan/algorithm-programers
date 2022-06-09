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

function loop(key, index, score, map) {
  const joinKey = key.join(" ");
  const arr = map[joinKey];
  if (arr) {
    arr.push(score);
  } else {
    map[joinKey] = [score];
  }

  for (let i = index; i < key.length; i++) {
    const newKey = [...key];
    newKey[i] = "-";

    loop(newKey, i + 1, score, map);
  }
}

function solution(info, query) {
  var answer = [];
  const map = {};

  for (const item of info) {
    // item은 info의 값
    const key = item.split(" ");
    const score = parseInt(key.pop());

    loop(key, 0, score, map);
  }

  for (const item in map) {
    // item은 map의 key 값
    map[item].sort((a, b) => a - b);
  }

  for (const item of query) {
    // item은 query의 값
    const key = item.split("and ").join("").split(" ");

    const score = parseInt(key.pop());
    const joinKey = key.join(" ");

    const value = map[joinKey];

    if (value) {
      let start = 0;
      let end = value.length;

      while (start < end) {
        const check = parseInt((start + end) / 2);

        if (value[check] < score) {
          start = check + 1;
        } else {
          end = check;
        }
      }

      answer.push(value.length - start);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

solution(info, query);
