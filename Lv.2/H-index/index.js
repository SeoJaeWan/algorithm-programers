const citations = [1];

function solution(citations) {
  for (let i = citations.length; i >= 0; i--) {
    const cnt = citations.filter((data) => data >= i).length;

    if (i <= cnt) {
      return i;
    }
  }
}

console.log(solution(citations));
