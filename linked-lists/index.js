class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // This points to the next node
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  add(el) {
    if (typeof el === "number") {
      const node = new Node(el);
      let current = this.head;

      if (this.head === null) this.head = node;
      else {
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getLast() {
    let node = this.head;
    while (node) {
      node = node.next;
      if (node.next === null) return node.value;
    }
  }
  getFirst() {
    return this.head.value;
  }
  insertAt(el, index) {
    let count = 0;
    let current = this.head;
    while (current.next) {
      if (count === index) {
        const node = new Node(el);
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
      count++;
    }
  }
  removeFrom(index) {
    if (index < 0) return console.log("Please Enter a valid index");
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to remove an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }

      // return the remove element
      return curr.value;
    }
  }
}

// Function to swap the nodes
function swap(ptr1, ptr2) {
  let tmp = ptr2.data;
  ptr2.value = ptr1.value;
  ptr1.value = tmp;
}

// Function to sort the list
function bubbleSort(head) {
  let i, j;
  let swapped;

  if (head == null) return;

  do {
    swapped = false;
    let current = head;

    while (current.next != null) {
      if (current.value > current.next.value) {
        swap(current, current.next);
        swapped = true;
      }
      current = current.next;
    }
  } while (swapped);
}
const node1 = new Node(3);
const node2 = new Node(2);
const node3 = new Node(1);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);
list.add(10);
list.add(22);
console.log(JSON.stringify(list));
list.insertAt(4, 2);
// console.log(list.removeFrom(3));
console.log(JSON.stringify(list));

// console.log(list.getFirst())
