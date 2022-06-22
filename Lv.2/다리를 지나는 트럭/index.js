const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
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
    return this.queue[this.front][0];
  }

  size() {
    return this.rear - this.front;
  }

  weight() {
    return this.queue.reduce((prev, current) => prev + current[1], 0);
  }

  upTime() {
    this.queue = this.queue.map((data) => {
      return [data[0] + 1, data[1]];
    });
  }
}

function solution(bridge_length, weight, truck_weights) {
  var answer = 1;

  const queue = new Queue();

  queue.enqueue([1, truck_weights.shift()]);

  while (queue.size() !== 0) {
    answer++;
    queue.upTime();

    if (queue.peek() > bridge_length) {
      queue.dequeue();
    }

    const currentWeight = queue.weight();
    const size = queue.size();
    const newWeight = truck_weights[0];

    if (currentWeight + newWeight <= weight && size < bridge_length) {
      queue.enqueue([1, truck_weights.shift()]);
    }
  }

  return answer;
}

solution(bridge_length, weight, truck_weights);
