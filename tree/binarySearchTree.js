// Node class
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
// Binary Search tree class
class BinarySearchTree {
    constructor() {
        // root of a binary search tree
        this.root = null
    }
    // helper method which creates a new node to
    // be inserted and calls insertNode
    insert(data) {
        // Creating a node and initialising
        // with data
        var newNode = new Node(data)

        // root is null then node will
        // be added to the tree and made root.
        if (this.root === null) this.root = newNode
        // find the correct position in the
        // tree and add the node
        else this.insertNode(this.root, newNode)
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data
    insertNode(node, newNode) {
        // if the data is less than the node
        // data move left of the tree
        if (newNode.data < node.data) {
            // if left is null insert node here
            if (node.left === null) node.left = newNode
            // if left is not null recur until
            // null is found
            else this.insertNode(node.left, newNode)
        }

        // if the data is more than the node
        // data move right of the tree
        else {
            // if right is null insert node here
            if (node.right === null) node.right = newNode
            // if right is not null recur until
            // null is found
            else this.insertNode(node.right, newNode)
        }
    }
    search(node, data) {
        if (!node) return null
        if (node.data < data) {
            return this.search(node.right, data)
        } else if (node > data) {
            return this.search(node.right, data)
        } else {
            return node
        }
    }
    remove(data) {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeNode(this.root, data)
    }
    // Method to remove node with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    removeNode(node, key) {
        // if the root is null then tree is
        // empty
        if (node === null) return null
        // if data to be delete is less than
        // roots data then move to left subtree
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key)
            return node
        }

        // if data to be delete is greater than
        // roots data then move to right subtree
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key)
            return node
        }

        // if data is similar to the root's data
        // then delete this node
        else {
            // deleting node with no children
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            // deleting node with one children
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            var aux = this.findMinNode(node.right) // tìm node nhỏ nhất bên phải vì chỉ có node nhỏ nhất mới thỏa điều kiện  lớn hơn left và  nhỏ hơn right theo quy luật
            node.data = aux.data // gán node right nhỏ nhất sang node cần xóa

            node.right = this.removeNode(node.right, aux.data) // xóa node trái cùng của note right nhỏ nhất
            return node
        }
    }
    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node
        if (node.left === null) return node
        else return this.findMinNode(node.left)
    }
    inorder(root) {
        if (root != null) {
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }
    // Performs preorder traversal of a tree
    preorder(node) {
        if (node !== null) {
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    // Performs postorder traversal of a tree
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }
    printGivenLevel(root, level) {
        if (root == null) return
        if (level == 1) console.log(root.data)
        else if (level > 1) {
            this.printGivenLevel(root.left, level - 1)
            this.printGivenLevel(root.right, level - 1)
        }
    }
}

function maxDepth(node) {
    console.log('----------start------------')
    console.log(JSON.stringify(node))
    if (node == null) return 0
    else {
        /* compute the depth of each subtree */
        let lDepth = maxDepth(node.left)
        let rDepth = maxDepth(node.right)
        console.log({ lDepth, rDepth })
        /* use the larger one */
        if (lDepth > rDepth) return lDepth + 1
        else return rDepth + 1
    }
    console.log('--------------end----------------')
}

var BST = new BinarySearchTree()

// Inserting nodes to the BinarySearchTree
BST.insert(15)
BST.insert(25)
BST.insert(10)
BST.insert(7)
BST.insert(22)
BST.insert(17)
BST.insert(13)
BST.insert(5)
BST.insert(9)
BST.insert(27)

// BST.insert(21)
// BST.insert(17)
// BST.insert(13)
// BST.insert(6)
// BST.insert(9)
// BST.insert(15)
// BST.insert(22)
// BST.insert(37)
// BST.insert(3)
// BST.insert(2)
// BST.insert(10)
// BST.insert(27)

// console.log(JSON.stringify(BST.root))
console.log(JSON.stringify(BST.root))

BST.remove(13)
// console.log(BST.search(BST.root, 25))
console.log('inorder')
console.log(JSON.stringify(BST.root))
// console.log('preOrder')
// BST.preorder(BST.root)
// console.log('level')
// BST.printGivenLevel(BST.root, 2)
// console.log(maxDepth(BST.root))
