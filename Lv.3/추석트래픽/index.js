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

    const seconds = parseFloat(splitData[2].split("s").join("")) * 1000;

    const endDate = get_millisconds(date);

    const startDate = endDate - seconds + 1;

    array.push([startDate, endDate]);
  }

  for (let i = 0; i < array.length; i++) {
    let count_s = 0;
    let count_e = 0;

    const checkDate_s = array[i][0];
    const checkDate2_s = checkDate_s + 999;

    const checkDate_e = array[i][1];
    const checkDate2_e = checkDate_e + 999;

    for (let j = 0; j < array.length; j++) {
      const current_s = array[j][0];
      const current_e = array[j][1];

      if (
        (checkDate_s <= current_s && current_s <= checkDate2_s) ||
        (checkDate_s <= current_e && current_e <= checkDate2_s) ||
        (current_s <= checkDate_s && checkDate_s <= current_e)
      ) {
        count_s++;
      }
      if (
        (checkDate_e <= current_s && current_s <= checkDate2_e) ||
        (checkDate_e <= current_e && current_e <= checkDate2_e) ||
        (current_s <= checkDate_e && checkDate_e <= current_e)
      ) {
        count_e++;
      }
    }
    answer = Math.max(Math.max(count_s, count_e), answer);
  }

  return answer;
}
