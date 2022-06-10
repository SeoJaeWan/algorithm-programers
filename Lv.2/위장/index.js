const clothes = [
  ["a", "aa"],
  ["b", "aa"],
  ["c", "aa"],
  ["aa", "bb"],
  ["bb", "bb"],
  ["c_c", "bb"],
  ["aaa", "cc"],
  ["bbb", "cc"],
  ["bdb", "cc"],
];

function loop(clothes, index, result) {
  let value = 0;

  for (let i = index; i < clothes.length; i++) {
    value +=
      result * clothes[i].length +
      loop(clothes, i + 1, result * clothes[i].length);
  }

  return value;
}

function solution(clothes) {
  const obj = {};

  for (const item of clothes) {
    const value = obj[item[1]];

    if (value) {
      obj[item[1]].push(item[0]);
    } else {
      obj[item[1]] = [item[0]];
    }
  }

  return loop(Object.values(obj), 0, 1);
}

console.log(solution(clothes));
