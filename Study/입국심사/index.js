const times = [7, 10];
const n = 6;

// 1, 2, 3, 4, 5, 6
// 7 :  1, 3, 5, 6
// 10 : 2, 4,

function solution(n, times) {
  const sortTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortTimes[sortTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const sum = sortTimes.reduce(
      (acc, data) => acc + Math.floor(mid / data),
      0
    );

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(solution(n, times));
