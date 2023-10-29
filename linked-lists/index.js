/*


Linked list (danh sách liên kết) là một cấu trúc dữ liệu phổ biến trong lập trình, dùng để lưu trữ và quản lý một tập hợp các phần tử dữ liệu (nodes).
Các phần tử (nodes) trong danh sách liên kết được tổ chức dưới dạng một chuỗi, mỗi node chứa dữ liệu và một liên kết (thường là một tham chiếu)
đến node tiếp theo trong danh sách

advantages:
- không được lưu trữ ở các vị trí bộ nhớ liền kề không giống như mảng.

Disadvanrages:
 - More memory is required in the linked list as compared to an array. 
Bởi vì trong danh sách liên kết cũng cần có một con trỏ để lưu trữ địa chỉ của phần tử tiếp theo và nó cần thêm bộ nhớ cho chính nó. 

*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null // This points to the next node
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    add(el) {
        if (typeof el === 'number') {
            const node = new Node(el)
            let current = this.head

            if (this.head === null) this.head = node
            else {
                while (current.next) {
                    current = current.next
                }
                current.next = node
            }
        }
    }
    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }
    getLast() {
        let node = this.head
        while (node) {
            node = node.next
            if (node.next === null) return node.value
        }
    }
    getFirst() {
        return this.head.value
    }
    insertAt(el, index) {
        let count = 0
        let current = this.head
        while (current.next) {
            if (count === index) {
                const node = new Node(el)
                node.next = current.next
                current.next = node
                return
            }
            current = current.next
            count++
        }
    }
    removeFrom(index) {
        if (index < 0) return console.log('Please Enter a valid index')
        else {
            let curr,
                prev,
                it = 0
            curr = this.head
            prev = curr

            // deleting first element
            if (index === 0) {
                this.head = curr.next
            } else {
                // iterate over the list to the
                // position to remove an element
                while (it < index) {
                    it++
                    prev = curr
                    curr = curr.next
                }

                // remove the element
                prev.next = curr.next
            }

            // return the remove element
            return curr.value
        }
    }
    getMiddle() {
        let high = this.head
        let low = this.head
        while (high && high.next) {
            high = high.next.next
            low = low.next
        }
        return low.value
    }
}
//Reverse a Linked List
function reverse(node) {
    let prev = null
    let next = null
    let current = node// 1 -> 2 -> 3 -> null
    while (current) {
        next = current.next // use temp for loop
        current.next = prev // 1 -> prev(null) | 2 -> prev1(1 -> null) | 3 -> prev2(2 - 1 - null) (lấy current next trỏ sang prev)
        prev = current // prev1 1 -> null | prev2 2 -> 1 -> null | prev3 3 - 2 - 1 null (gán lại current sau khi trỏ)
        current = next // get temp for loop
    }
    return prev
}
//Rotate a Linked List

function rotate(head, k) {
    if (k == 0) return
    // Let us understand the
    // below code for example k = 4
    // and list = 10->20->30->40->50->60.
    var current = head
    // current will either point to kth
    // or NULL after this
    // loop. current will point to node
    // 40 in the above example
    // get tail -> k -> ...
    var count = 1
    while (count < k && current != null) {
        current = current.next
        count++
    }
    // If current is NULL, k is greater
    // than or equal to count
    // of nodes in linked list.
    // Don't change the list in this case
    if (current == null) return
    //   giữ kthNode dùng cho việc đánh dấu đầu và cuối phần tử
    //  tail -> k -> ....
    // để đánh dầu đầu -> next qua node K và gáng cho head
    // để đánh dấu cuối -> tail.next = null
    var kthNode = current
    // current will point to last
    // node after this loop
    // current will point to node
    // 60 in the above example
    while (current.next != null) current = current.next
    // current.next = head => 'next' chung address voi head va kthNode
    // link phan tu cuoi cung voi phan tu dau
    current.next = head
    // ktNode =  tail -> k -> ....
    // gang K for head
    head = kthNode.next
    // change next of kth node to null
    kthNode.next = null
    return head
}

// Function to swap the nodes
function swap(ptr1, ptr2) {
    let tmp = ptr2.value
    ptr2.value = ptr1.value
    ptr1.value = tmp
}
// Function to sort the list
function bubbleSort(head) {
    let swapped
    if (head == null) return
    do {
        swapped = false
        let current = head
        while (current.next != null) {
            if (current.value > current.next.value) {
                swap(current, current.next)
                swapped = true
            }
            current = current.next
        }
    } while (swapped)
}

const node1 = new Node(3)
const node2 = new Node(2)
const node3 = new Node(1)

node1.next = node2
node2.next = node3

let list = new LinkedList(node1)
list.add(10)
list.add(22)
list.add(32)
list.insertAt(4, 2)
// console.log(list.removeFrom(3));
bubbleSort(list.head)
console.log(JSON.stringify(list))

// console.log('revert')
// list.head = reverse(list.head)

console.log('rotate')
list.head = rotate(list.head, 4)
console.log(JSON.stringify(list))

// console.log(list.getFirst())
