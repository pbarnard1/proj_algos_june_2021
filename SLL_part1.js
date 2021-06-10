// Singly linked list node
class SLLNode {
    constructor(value) {
        this.data = value;
        this.next = null;
        // If we used a node in a doubly-linked list, we would also have this.prev = null, i.e. a pointer to the previous node.
    }
}

// THe singly linked list itself
class SLL {
    // Start with no nodes initially inside our list
    constructor() {
        this.head = null;
    }

    // Add a node to the front of the list
    addNodeToFront(value) {
        var newNode = new SLLNode(value); // Create a new node
        if (this.head == null) { // If the list was empty from before, put the new node at the start of the list, i.e. set the head to point to the new node
            this.head = newNode;
            return this;
        }
        // If we reach this point in the code, then We have at least one node in the list beforehand
        newNode.next = this.head; // Connect the new node to the original list
        this.head = newNode; // Makes the new node the first node in the list
        return this;
    }
}

// Demoing the SLL:
var mySLL = new SLL();
mySLL.addNodeToFront(10);
console.log(mySLL);
mySLL.addNodeToFront(20);
console.log(mySLL);
mySLL.addNodeToFront(40);
console.log(mySLL);
console.log(mySLL.head.next.next);
mySLL.addNodeToFront(30).addNodeToFront(70); // How to chain commands because of "return this"
console.log(mySLL);