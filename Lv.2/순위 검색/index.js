function solution(info, query) {
  var answer = [];

  const sliceQuery = query.map((data) => {
    const list = data.split(" and ");

    const [food, score] = list[3].split(" ");
    list[3] = food;
    list[4] = parseInt(score);

    return list;
  });

  for (const items of sliceQuery) {
    const list = info.map((data, idx) => data);

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (item !== "-" && i !== 4)
        for (let j = 0; j < list.length; j++) {
          if (!list[j].includes(item)) {
            list.splice(j, 1);
            j--;
          }
        }

      if (i === 4) {
        for (let j = 0; j < list.length; j++) {
          const num = Math.floor(list[j].split(" ")[4]);
          if (num < item) {
            list.splice(j, 1);
            j--;
          }
        }
      }
    }
    answer.push(list.length);
  }

  return answer;
}
