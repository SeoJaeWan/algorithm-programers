// const relation = [
//   ["100", "r", "5", "qw", "qw", "qw5"],
//   ["200", "c", "5", "ew", "e5", "155"],
//   ["300", "d", "5", "fe", "fe", "fe5"],
//   ["400", "f", "6", "vd", "vd", "vd5"],
//   ["500", "h", "5", "gf", "gf", "gf5"],
//   ["600", "t", "5", "nf", "e5", "nf5"],
//   ["650", "b", "5", "15", "15", "155"],
// ];

// 0 5
// 3 5
// 0 3

const relation = [
  ["a", 2, 30, "va", 20, 10, 10],
  ["d", 1, 40, "vx", 10, 10, 20],
  ["a", 1, 40, "vx", 20, 20, 10],
  ["d", 1, 40, "va", 20, 20, 10],
];

function makeArr(obj, numArr, index, max, lng) {
  if (numArr.length === lng) {
    return (obj[numArr] = []);
  }

  for (let i = index; i < max; i++) {
    const current = [...numArr, i];
    makeArr(obj, current, i + 1, max, lng);
  }
}

function loop(relation, length, answer) {
  if (relation.length < length) {
    return;
  }
  const obj = {};

  makeArr(obj, [], 0, relation[0].length, length);

  const key = Object.keys(obj);

  for (let i = 0; i < relation.length; i++) {
    for (let j = 0; j < key.length; j++) {
      const value = key[j].split(",");
      let str = "";
      for (let k = 0; k < value.length; k++) {
        str += "," + relation[i][value[k]];
      }

      obj[key[j]].push(str);
    }
  }

  for (const item in obj) {
    const temp = obj[item].filter((v, i) => obj[item].indexOf(v) === i);
    const key = item.split(",");

    let check = true;
    answer.map((data) => {
      const set = new Set([...key, ...data]);

      if (set.size === key.length) {
        check = false;
      }
    });

    if (temp.length === relation.length && check) {
      answer.push(key);
    }
  }

  loop(relation, length + 1, answer);
}

function solution(relation) {
  let answer = [];

  loop(relation, 1, answer);

  return answer.length;
}

console.log(solution(relation));
