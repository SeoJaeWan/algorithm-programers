const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

class Queue {
  constructor(array) {
    this.queue = array ? [...array] : [];
    this.rear = array ? array.length : 0;
    this.front = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];

    delete this.queue[this.front];
    this.front += 1;

    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isBig(value) {
    let check = false;

    for (const i of this.queue) {
      if (i > value) {
        check = true;
      }
    }

    return check;
  }
}

function solution(priorities, location) {
  var answer = 0;

  const queue = new Queue(priorities);

  while (queue.size() !== 0) {
    const value = queue.dequeue();

    if (queue.isBig(value)) {
      queue.enqueue(value);
    } else {
      answer++;

      if (location === 0) {
        break;
      }
    }

    location--;

    if (location === -1) {
      location = queue.size() - 1;
    }
  }

  return answer;
}

console.log(solution(priorities, location));
