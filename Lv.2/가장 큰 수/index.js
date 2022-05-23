let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function solution(numbers) {
  let answer = "";
  numbers = numbers.sort((a, b) => {
    return (
      parseInt(b.toString() + a.toString()) -
      parseInt(a.toString() + b.toString())
    );
  });

  answer = parseInt(numbers.join(""));

  return answer ? numbers.join("") : "0";
}

solution(numbers);
