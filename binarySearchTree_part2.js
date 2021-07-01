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

    // Size of binary search tree
    size(curNode = this.root) {
        if (curNode == null) { // If we've hit a dead end, we're done in this branch
            return 0;
        } else { // Otherwise add this node and the nodes to the left and right of this one
            return 1 + this.size(curNode.left) + this.size(curNode.right);
        }
    }

    // Height of BST tree
    height(curNode = this.root) {
        if (curNode == null) { // If we've hit a dead end, doesn't count towards height
            return 0;
        } else { // Add this level to the height, then determine which is bigger between the left and right in terms of height
            return 1 + Math.max(this.height(curNode.left),this.height(curNode.right));
        }
    }

    /* Traversals:
    preorder: current node, then the nodes to the left, then the nodes to the right
    in order: nodes to the left, current node, then nodes to the right
    postorder: nodes to the left, nodes to the right, then current node

    In these examples, we'll use an array to hold the values called "dataArr".
    */
    preOrder(curNode = this.root, dataArr = []) {
        if (curNode != null) {
            dataArr.push(curNode.val);
            this.preOrder(curNode.left,dataArr);
            this.preOrder(curNode.right,dataArr);
        }
        return dataArr;
    }

    inOrder(curNode = this.root, dataArr = []) {
        if (curNode != null) {
            this.inOrder(curNode.left,dataArr);
            dataArr.push(curNode.val);
            this.inOrder(curNode.right,dataArr);
        }
        return dataArr;
    }

    postOrder(curNode = this.root, dataArr = []) {
        if (curNode != null) {
            this.postOrder(curNode.left,dataArr);
            this.postOrder(curNode.right,dataArr);
            dataArr.push(curNode.val);
        }
        return dataArr;
    }

    // Determine if the tree is balanced
    isBalancedTree(node = this.root) {
        if (node == null) { // Edge case: tree is empty, so we'll assume it's balanced
            return true;
        } else { // Tree is balanced if there are the same number of nodes on each side of the root, OR there is AT MOST a difference of one node between them
            return Math.abs(this.size(node.left) - this.size(node.right)) <= 1;
        }
    }
}