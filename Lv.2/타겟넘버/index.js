const numbers = [1, 1, 1, 1, 1];
const target = 3;

function deep(numbers, index, target, array, check) {
  if (index === array.length) {
    if (numbers === target) {
      check.push(numbers);
    }
    return;
  }

  deep(numbers + array[index], index + 1, target, array, check);
  deep(numbers - array[index], index + 1, target, array, check);
}

function solution(numbers, target) {
  const check = [];

  deep(numbers[0], 1, target, numbers, check);
  deep(-numbers[0], 1, target, numbers, check);

  return check.length;
}

solution(numbers, target);
