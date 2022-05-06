let priorities = [2, 1, 2, 3];
let location = 0;

function solution(priorities, location) {
  var answer = 0;
  let data = priorities.map((data, idx) => [data, idx === location]);

  while (data.length !== 0) {
    const out = data[0];

    let check = false;
    for (let i = 1; i < data.length; i++) {
      if (out[0] < data[i][0]) {
        check = true;
      }
    }

    if (check) {
      data.push(data.shift());
    } else {
      let outData = data.shift();
      if (outData[1]) {
        answer = priorities.length - data.length;
      }
    }
  }
  return answer;
}

solution(priorities, location);
