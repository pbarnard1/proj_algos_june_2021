class MyNode { // Node used in stacks and queues (just like singly linked lists!)
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // Top of the stack
    }

    // Push a new node to the top of the stack
    addToTop(val) {
        var newNode = new MyNode(val);
        if (this.top == null) { // If the stack was empty from before, put the new node at the start of the stack, i.e. set the top to point to the new node
            this.top = newNode;
            return this;
        }
        newNode.next = this.top; // Connect new node to stack
        this.top = newNode; // The new node now is at the top of the stack
        return this;
    }

    // Remove a node from the stack - can only remove the top node (pop)
    removeTop() {
        // If the stack is empty, no nodes to remove - so we'll return null - otherwise we get an error
        if (this.top == null) {
            return null;
        }
        var removedNode = this.top;
        // Move top to next highest node in the stack
        this.top = removedNode.next;
        // Disconnects the original topmost node from the stack
        removedNode.next = null;
        return removedNode;
    }

    // Returns the number of nodes in the stack
    length() {
        var runner = this.top; // Start at the top of the stack
        var numNodes = 0;
        // Loop to move down stack
        while (runner != null) {
            numNodes++; // Increment number of nodes found
            runner = runner.next; // Move to next node (if there is one)
        }
        return numNodes;
    }
}

var myStack = new Stack();

myStack.addToTop(10).addToTop(5).addToTop(15);
// console.log(myStack);
myStack.removeTop();
// console.log(myStack);
myStack.removeTop();
// console.log(myStack);
// myStack.removeTop();
// console.log(myStack);
// myStack.removeTop();
// console.log(myStack);
console.log(myStack.length());


// Queue data structure

/* CORRECTED code: The visual should look like this (the video had the arrows reversed):

                               Back
-----     -----     -----     -----     
| 1 | --> | 2 | --> | 3 | --> | 4 | --> 
-----     -----     -----     -----     
Front

*/

class Queue {
    constructor() {
        // Pointers to the front and back of the queue
        this.front = null;
        this.back = null;
    }

    // Add node to back of queue
    enqueue(val) {
        var newNode = new MyNode(val);
        // Edge case: the queue is empty, so front AND back point to same node
        if (this.front == null) {
            this.front = newNode;
        } else { // Node added to non-empty queue
            this.back.next = newNode; // Connect node to back of the queue
        }
        this.back = newNode; // Point back to new node
        return this;
    }

    // Remove node from the front
    dequeue() {
        if (this.front == null) { // Edge case: queue is empty already
            return this;
        }
        // Grab node at front
        var removedNode = this.front;
        // Have front point to next node in the queue
        this.front = removedNode.next;
        removedNode.next = null; // Cut off node from queue
        if (this.front == null) { // Edge case: If queue is now empty after removing only node
            this.back = null; // Have back also point to null
        }
        return removedNode;
    }

    // Add additional methods here.
}

var myQueue = new Queue();
myQueue.enqueue(10).enqueue(20).enqueue(50);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);