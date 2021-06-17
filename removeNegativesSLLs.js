// Goal is to remove negative values in place from the SLL, then return that SLL back
function removeNegatives(someSLL) {
    // If the list is empty, nothing to remove, so return the list back
    if (someSLL.head == null) {
        return someSLL;
    }
    var currNode = someSLL.head;
    // Edge case: Negative node(s) at the beginning of the list, so let's remove those first and move the head accordingly
    // console.log(someSLL);
    if (currNode.data < 0) {
        while (currNode != null && currNode.data < 0) { // Added currNode != null (MUST come first) to account for nasty edge case that all nodes are negative
            currNode = currNode.next;
        }
        someSLL.head = currNode; // Move head accordingly
    }

    // Nasty edge case: all nodes are negative, so they've been removed - nothing else to look at
    if (someSLL.head == null) {
        return someSLL;
    }
    // console.log(someSLL);
    // console.log(currNode);
    var nextNode = currNode.next; // Next node after first one
    var prevNode = null; // Previous node from current one
    // Loop through list
    while (currNode) {
        if (currNode.data >= 0) { // If node is non-negative, move along
            prevNode = currNode;
            currNode = nextNode;
            if (nextNode) { // Move pointer to next node only if it's not null (nextNode != null is the same as saying just "nextNode" here)
                nextNode = nextNode.next;
            }
        } else {
            // Cut the node off from the list
            currNode.next = null;
            prevNode.next = nextNode;
            // Move pointers:
            currNode = nextNode;
            if (nextNode) {
                nextNode = nextNode.next;
            }
        }
    }
    return someSLL;
}

var mySLL = new SLL(); // MAKE SURE YOU HAVE YOUR SLL AND SLLNode CLASSES IN THIS FILE AS WELL (omitted for brevity)

mySLL.addNodeToFront(-10).addNodeToFront(20).addNodeToFront(-30); // Play around with this here
console.log("Before:");
console.log(mySLL);
removeNegatives(mySLL);
console.log("After:");
console.log(mySLL);