const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
  var answer = 45;

  numbers.forEach((element) => {
    answer = answer - element;
  });

  return answer;
}

console.log(solution(numbers));
