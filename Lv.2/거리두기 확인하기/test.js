const places = [
  [
    "POOPO",
    "XPXOO",
    "PXPXO", //
    "XOXOO", //
    "PXPXP", //
  ], //

  [
    "POOPX", //
    "OXPXP", //
    "PXXXO", //
    "OXXXO", //
    "OOOPP",
  ], //
  [
    "PXOPX", //
    "OXOXP", //
    "OXPOX", //
    "OXXOP", //
    "PXPOX",
  ], //
  [
    "OOOXX", //
    "XOOOX", //
    "OOOXX", //
    "OXOOX", //
    "OOOOO",
  ], //
  [
    "PXPXP", //
    "XPXPX", //
    "PXPXP", //
    "XPXPX", //
    "PXPXP",
  ], //
];

function solution(places) {
  var answer = [];

  for (let i = 0; i < places.length; i++) {
    const currentRoom = places[i];

    const rooms = currentRoom.join("").split("");

    let check = false;
    let count = 0;

    for (let j = 0; j < rooms.length; j++) {
      const place = rooms[j];
      const next = rooms[j + 1] !== "X";
      const before = rooms[j - 1] !== "X";
      const nextLine = rooms[j + 5] !== "X";

      const currentLine = parseInt(j / 5);
      const currentIndex = j % 5;

      if (place === "P") {
        count++;
        for (let k = j + 1; k < rooms.length; k++) {
          const line = parseInt(k / 5);
          const index = k % 5;

          const mht =
            Math.abs(line - currentLine) + Math.abs(index - currentIndex);

          if (rooms[k] === "P")
            if (mht <= 2) {
              check = true;

              if (index < currentIndex) {
                if (line === currentLine) {
                  if (!before) {
                    check = false;
                  }
                } else {
                  if (!before && !nextLine) {
                    check = false;
                  }
                }
              } else if (index > currentIndex) {
                if (line === currentLine) {
                  if (!next) {
                    check = false;
                  }
                } else {
                  if (!next && !nextLine) {
                    check = false;
                  }
                }
              } else if (index === currentIndex) {
                if (line >= currentLine + 2 && !nextLine) {
                  check = false;
                }
              }
            }

          // 거리두기 조건이 충족하지 않을 경우 바로 조회를 종료
          if (check) break;
        }
      }

      //   자리 하나에 대해서 반복을 진행한 다음 조건이 안맞는 것이 발견되면 조회 종료
      if (check) {
        answer.push(0);
        break;
      }
    }

    console.log(count);
    if (!check) {
      answer.push(1);
    }
  }

  return answer;
}

solution(places);
