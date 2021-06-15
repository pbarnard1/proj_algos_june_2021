// Singly linked list node

class SLLNode {
    constructor(value) {
        this.data = value;
        this.next = null;
        // this.prev = null;
    }
}

// SLL itself
class SLL {
    constructor() {
        this.head = null;
    }

    // Add a node to the front of the list
    addNodeToFront(value) {
        var newNode = new SLLNode(value);
        if (this.head == null) { // If the list was empty from before, put the new node at the start of the list, i.e. set the head to point to the new node
            this.head = newNode;
            return this;
        }
        // We have at least one node in the list
        newNode.next = this.head; // Connect the new node to the original list
        this.head = newNode; // Makes the new node the first node in the list
        return this;
    }

    // NEW METHODS ADDED BELOW: length and addNodeToBack; knowing when to use runner vs. runner.next for your condition

    // Length of our list
    length() {
        var runner = this.head; // Start off at the head of the list (first node)
        var numNodes = 0; // 
        // While loop to help us move through the list
        while (runner != null) {
            numNodes++; // Add current node to count
            runner = runner.next; // Moves the runner to the next node in the list (if there is one)
        }
        return numNodes;
    }

    // Add a node to the end of the list
    addNodeToBack(val) {
        var newNode = new SLLNode(val); // New node
        // If the list is empty, no need to add to the back
        if (this.head == null) {
            this.head = newNode;
            return this;
        }
        var runner = this.head;
        // Travel through list until we head the last node - AND STOP THERE (so we don't go past it)
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = newNode; // Connect this list to the new node
        return this;
    }
}

var mySLL = new SLL();
mySLL.addNodeToBack(40);
console.log(mySLL);
mySLL.addNodeToBack(35);
console.log(mySLL);
mySLL.addNodeToFront(10);

console.log(mySLL);
mySLL.addNodeToFront(20);
console.log(mySLL);
mySLL.addNodeToFront(30);
console.log(mySLL);
console.log(mySLL.length());
// console.log(mySLL.head.next.next)
// mySLL.addNodeToFront(30).addNodeToFront(70);
// console.log(mySLL);