const new_id = "a";

function solution(new_id) {
  let lowId = new_id.toLowerCase();
  const regTest1 = /[+~!@#$%^&*\(\)\=\{\}\[\]:?,<>\/]/gi;
  const regTest2 = /\.+/g;
  const regTest3 = /^\.|\.$/g;

  if (regTest1.test(lowId)) {
    lowId = lowId.replace(regTest1, "");
  }

  lowId = lowId.replace(regTest2, ".");
  lowId = lowId.replace(regTest3, "");

  if (lowId === "") {
    lowId = "a";
  }

  lowId = lowId.slice(0, 15);
  lowId = lowId.replace(regTest3, "");

  const currentLength = lowId.length;
  for (let i = 0; i < 3 - currentLength; i++) {
    lowId += lowId[lowId.length - 1];
  }

  return lowId;
}

console.log(solution(new_id));
