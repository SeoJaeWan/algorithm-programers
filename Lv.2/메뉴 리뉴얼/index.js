const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

function sliceOrder(order, course, index, current, menus, start) {
  let value = start + order.slice(index, current);

  if (value.length === course) {
    if (menus[value]) {
      menus[value]++;
    } else {
      menus[value] = 1;
    }
    return;
  }

  if (index === order.length - 1) {
    return;
  }

  for (let i = current + 1; i <= order.length; i++) {
    sliceOrder(order, course, i - 1, i, menus, value);
  }
}

function solution(orders, course) {
  var answer = [];

  let menus = {};

  course.forEach((element) => {
    orders.forEach((order) => {
      for (let i = 0; i < order.length; i++) {
        sliceOrder(
          order.split("").sort().join(""),
          element,
          i,
          i + 1,
          menus,
          answer,
          ""
        );
      }
    });
  });

  course.forEach((element) => {
    let array = [];
    let check = 0;
    Object.keys(menus).forEach((menu) => {
      let value = menus[menu];

      if (element === menu.length && value > 1) {
        if (check < value) {
          array = [menu];
          check = value;
        } else if (check === value) {
          array.push(menu);
        }
      }
    });

    answer = answer.concat(array);
  });

  return answer.sort();
}

console.log(solution(orders, course));
