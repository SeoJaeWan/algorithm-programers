const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  var answer = [];
  const result = new Map();
  const realRecord = record.map((data) => {
    const info = data.split(" ");

    if (info[0] !== "Leave" && result[info[1]] !== info[2]) {
      result.set(info[1], info[2]);
    }

    return info;
  });

  for (const item of realRecord) {
    if (item[0] === "Enter")
      answer.push(`${result.get(item[1])}님이 들어왔습니다.`);
    else if (item[0] === "Leave")
      answer.push(`${result.get(item[1])}님이 나갔습니다.`);
  }

  return answer;
}

console.log(solution(record));
