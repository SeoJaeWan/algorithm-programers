let numbers = "011";

function makeNum(numbers, arr, str) {
  if (numbers.length === 0) {
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    let num = parseInt(str + numbers[i]);
    makeNum(
      numbers.filter((data, idx) => {
        return idx !== i;
      }),
      arr,
      num
    );

    if (num > 1) arr.add(num);
  }
}

function solution(numbers) {
  var answer = 0;

  let arr = new Set();

  makeNum(numbers.split(""), arr, "");

  arr.forEach((element) => {
    let check = true;
    for (let i = 2; i <= parseInt(Math.sqrt(element)); i++) {
      if (element % i === 0) {
        check = false;
      }
    }
    if (check) {
      answer++;
    }
  });

  return answer;
}

solution(numbers);
