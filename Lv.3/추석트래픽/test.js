const lines = ["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"];

function get_millisconds(date) {
  return (
    date.getHours() * 60 * 60 * 1000 +
    date.getMinutes() * 60 * 1000 +
    date.getSeconds() * 1000 +
    date.getMilliseconds()
  );
}

function solution(lines) {
  var answer = 0;

  const array = [];

  for (let i = 0; i < lines.length; i++) {
    const splitData = lines[i].split(" ");
    const date = new Date(`${splitData[0] + " " + splitData[1]}`);
    const date2 = new Date(`${splitData[0] + " " + splitData[1]}`);

    const seconds = parseFloat(splitData[2].split("s").join("")) * 1000;

    const endDate = get_millisconds(date);

    const startDate = endDate - seconds + 1;

    const endDate2 = get_millisconds(date2);
    console.log(date2);
    date2.setMilliseconds(date2.getMilliseconds() - seconds + 1);
    const startDate2 = get_millisconds(date2);
    console.log(date2);

    console.log(endDate2, seconds, startDate2);

    array.push([startDate, endDate]);
  }

  return answer;
}

solution(lines);
