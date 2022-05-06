let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

function solution(s) {
  let array = [];
  let answer = {};

  const reg = /[{},]/g;
  array = s.split(reg).filter((data) => data);

  array.forEach((element) => {
    if (answer[element]) {
      answer[element]++;
    } else {
      answer[element] = 1;
    }
  });

  array = [];

  for (let element in answer) {
    array.push([element, answer[element]]);
  }

  array.sort((a, b) => b[1] - a[1]);

  return array.map((data) => parseInt(data[0]));
}

solution(s);
