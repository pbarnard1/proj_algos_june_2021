/* Definition of the nodes we'll use in the Binary Search Tree class */
class BSTNode {
    constructor(value) {
        this.val = value; // Value
        this.left = null; // Pointer to nodes to the left of this one that are smaller in value
        this.right = null; // Pointer to nodes to the right of this one that are bigger in value
    }
}

/* The binary search tree (BST) itself */
class BST {
    constructor() {
        this.root = null; // Start with an empty tree
    }

    /* Define methods belonging to the BST class here. */

    addNode(val) {
        var newNode = new BSTNode(val); // Define new node
        // If the tree is empty, make this new node the root node
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        var runner = this.root; // Runner pointing to the current node, starting at the root
        // Loop to traverse the tree
        while (runner != null) {
            if (val > runner.val) { ;// If value is bigger than current node, move right
                if (runner.right == null) { // If no node to the right, insert there
                    runner.right = newNode;
                    break; // No need to go further - we've added the node
                } else { // Node already found to the right, so move runner
                    runner = runner.right;
                }
            } else { // Otherwise, move left
                if (runner.left == null) { // If no node to the left, insert there
                    runner.left = newNode;
                    break; // No need to go further - we've added the node
                } else { // Node already found to the left, so move runner
                    runner = runner.left;
                }
            }
        }
        return this;
    }
}

var myBST = new BST();
console.log(myBST);

myBST.addNode(10);
console.log(myBST);

myBST.addNode(20);
myBST.addNode(6);
myBST.addNode(8);
myBST.addNode(15);
console.log(myBST);
console.log(myBST.root.left.right); // Printing a specific node within the tree

myBST.addNode(30);
console.log(myBST.root.right); // Printing a specific node