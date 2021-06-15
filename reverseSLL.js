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
}

// Challenge in office hour - reverse an SLL in place
/*
[3, 8, 4] -> [4, 8, 3]
*/

function reverseSLL(someSLL) {
    /*
    Rough idea of what's happening
    curr.next = prev; //
    prev = curr;
    curr = next;
    next = curr.next; // won't work if this is null
    STOP when current node is null

    Move head to where prev now points to
    */
    // If the list is empty OR if the list has only one node
    if (someSLL.head == null || someSLL.head.next == null) {
        return someSLL;
    }
    // There are at least two nodes in the list if we reach this point
    var prevNode = null; // Pointer to previous node, starting at null (no previous node yet)
    var currNode = someSLL.head; // Pointer to current node, starting with the head node
    var nextNode = someSLL.head.next; // Pointer to next node in the list (2nd) after current one
    // Loop to reverse the list
    while (currNode != null) {
        // Move pointers down one
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
        if (currNode != null) { // Need this because if the node is null, we get an error
            nextNode = currNode.next; // won't work if this is null
        }
    }
    someSLL.head = prevNode; // Move the head accordingly
    return someSLL;
}

var mySLL = new SLL();
// mySLL.addNodeToFront(4);
console.log(mySLL);
reverseSLL(mySLL);
console.log(mySLL);
// console.log(mySLL.head.next);