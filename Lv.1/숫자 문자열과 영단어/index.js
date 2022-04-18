const s1 = "oneoneone4seveneight";
const s2 = "23four5six7";
const s3 = "2three45sixseven";
const s4 = "123";

function solution(s) {
  var answer = s.toString();

  const word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  word.forEach((element, idx) => {
    answer = answer.split(element).join(idx);
  });

  return parseInt(answer);
}

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
