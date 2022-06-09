function solution(info, query) {
  var answer = query.map(() => 0);

  for (let i = 0; i < query.length; i++) {
    let list = query[i].split(" and ");

    const [food, score] = list[3].split(" ");
    list[3] = food;
    list[4] = parseInt(score);

    list.pop();

    for (let j = 0; j < info.length; j++) {
      const string = info[j].split(" ");
      const num = Math.floor(string[4]);

      const q = `${list[0] === "-" ? string[0] : list[0]} ${
        list[1] === "-" ? string[1] : list[1]
      } ${list[2] === "-" ? string[2] : list[2]} ${
        list[3] === "-" ? string[3] : list[3]
      }`;

      if (info[j].includes(q) && num >= score) {
        answer[i]++;
      }
    }
  }

  return answer;
}
