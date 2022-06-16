const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  var answer = [];
  const hashTable = {};

  for (let i = 0; i < genres.length; i++) {
    if (hashTable[genres[i]]) {
      hashTable[genres[i]].push([plays[i], i]);
    } else {
      hashTable[genres[i]] = [[plays[i], i]];
    }
  }

  const keys = Object.keys(hashTable);

  keys.sort((a, b) => {
    let aMax = 0;
    hashTable[a].map((data) => (aMax += data[0]));
    let bMax = 0;
    hashTable[b].map((data) => (bMax += data[0]));

    return bMax - aMax;
  });

  for (let i = 0; i < keys.length; i++) {
    hashTable[keys[i]].sort((a, b) => b[0] - a[0]);
  }

  for (let i = 0; i < keys.length; i++) {
    hashTable[keys[i]].slice(0, 2).map((data) => answer.push(data[1]));
  }

  return answer;
}

solution(genres, plays);
