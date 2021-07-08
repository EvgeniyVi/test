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
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
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

// let SyngleLinkedList = new LinkedList();
// SyngleLinkedList.add(1);
// SyngleLinkedList.add(2);
// SyngleLinkedList.reverse();
// SyngleLinkedList.print();

class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  // Adds a value to the end of the Stack
  push(data) {
    this.stack.push(data);
    this.top += 1;
  }

  // Returns and removes the last element of the Stack
  pop() {
    if (this.top !== 0) {
      this.top -= 1;
      return this.stack.pop();
    }
    throw new Error("Stack Underflow");
  }

  // Returns the number of elements in the Stack
  get length() {
    return this.top;
  }

  // Returns true if stack is empty, false otherwise
  get isEmpty() {
    return this.top === 0;
  }
}

// let newStack = new Stack();

// newStack.push(15);

// console.log( 'Is stack empty? ', newStack.isEmpty )

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add new node in the list and return length list
  enqueue(data) {
    const node = new Node(data); // creates the node using class Node

    if (this.head) {
      // if the first Node exitsts
      this.tail.next = node; // inserts the created node after the tail of our Queue
      this.tail = node; // now the created node is the last node
    } else {
      // if there are no nodes in the Queue
      this.head = node; // the created node is a head
      this.tail = node; // also the created node is a tail in Queue because it is single.
    }

    this.length++; // increases the length of Queue by 1
  }

  //delete first node in list
  dequeue() {
    const current = this.head; // saves the link to the head which we need to remove
    this.head = this.head.next; // moves the head link to the second Node in the Queue
    this.length--; // decreaments the length of our Queue

    return current.data; // returns the removed Node's value
  }

  print() {
    let current = this.head; // saves a link to the head of the queue

    while (current) {
      // goes through each Node of the Queue
      console.log(current.value); // prints the value of the Node in console
      current = current.next; // moves link to the next node after head
    }
  }
  // Returns true if queue is empty, false otherwise
  isEmpty() {
    return this.length === 0;
  }
  // Returns the number of elements in the queue
  getLength() {
    return this.length;
  }
}
  const queue = new Queue();
  console.log('is empty?', queue.isEmpty())
  console.log('add 10');   queue.enqueue(10)