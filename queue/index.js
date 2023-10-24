/*
A queue in JavaScript is a linear data structure that follows the First-In-First-Out (FIFO) principle. 
*/
class Queue {
    constructor() {
        this.items = []
    }

    // Add an item to the queue (enqueue)
    enqueue(item) {
        this.items.push(item)
    }

    // Remove and return the front item from the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty'
        }
        return this.items.shift()
    }

    // Return the front item without removing it
    front() {
        if (this.isEmpty()) {
            return 'Queue is empty'
        }
        return this.items[0]
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0
    }

    // Return the size of the queue
    size() {
        return this.items.length
    }

    // Print the queue
    print() {
        console.log(this.items)
    }
}

// Example usage
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print() // Output: [1, 2, 3]
console.log(queue.dequeue()) // Output: 1
queue.print() // Output: [2, 3]
console.log(queue.front()) // Output: 2
console.log(queue.isEmpty()) // Output: false
console.log(queue.size()) // Output: 2
