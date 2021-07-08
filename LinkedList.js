// Create node for LinkeList
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // first element;
    this.tail = null; // last element
    this.length = 0;
  }

  add(data) {
    let node = new Node(data);//new node
    if (!this.head) {
      this.head = node;//first element node
      this.tail = node; //last element node
    } else {
      this.tail.next = node;//next element node
      this.tail = node;//last element node
    }
    this.length++;
    return this;
  }

  remove(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
        this.length--;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
    return this;
  }

  print() {
    let string = "";
    let current = this.head;
    while (current) {
      string += current.data + " ";
      current = current.next;
    }
    console.log(string.trim());
  }
}

let SyngleLinkedList = new LinkedList();
// SyngleLinkedList.add(1);
// SyngleLinkedList.add(2);
// SyngleLinkedList.reverse();
// SyngleLinkedList.print();

class Stack {
  constructor() {
    this.elements = [];
  }

  // Adds a value to the end of the Stack
  push(elements) {
    this.elements.push(elements);
  }

  // Returns and removes the last element of the Stack
  pop() {
    return this.elements.pop();
  }
  
  peek() {
    if (this.elements.length == 0) {
      return null;
    }
    return this.elements[this.elements.length - 1]
  }
  getSize() {
    return this.elements.length();
  }
  isEmpty() {
    return this.getSize() === 0;
  }
}

let newStack = new Stack();

// newStack.push("Banana");
// newStack.push("Orange");
// newStack.push("Potatoes");
// console.log(newStack);



class Queue {
  constructor() {
    this.elements = [];
  }
  enqueue(elements) {
    this.elements.push(elements);
  }
  dequeue() {
    return this.elements.shift();
  }
  peek() {
    return this.elements[0];
  }
  getSize() {
    return this.elements.length;
  }
  isEmpty() {
    return this.getSize() === 0;
  }

}
const newQueue = new Queue();

// newQueue.enqueue("Banana");
// newQueue.enqueue("Orange");
// newQueue.enqueue("Potatoes");

// console.log(newQueue);
// console.log(newQueue.dequeue());
// console.log(newQueue.peek());
// console.log(newQueue.isEmpty());
// console.log(newQueue.getSize());