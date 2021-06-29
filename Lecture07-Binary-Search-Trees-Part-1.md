## Binary Search Trees
Here is a visual of a binary search tree:
![Image of binary search tree](https://miro.medium.com/max/2388/1*ziYvZzrttFYMXkkV9u66jw.png)
(Image comes from [this page](https://levelup.gitconnected.com/an-into-to-binary-search-trees-432f94d180da))

A binary search tree (BST) is useful for finding/retrieving values fast.  With an unsorted array you'd have to search through every element to see if a value is found.  With a binary search tree, you don't even have to search through all the values - only a section of them.  So how is this accomplished?

Let's build a BST from scratch.  We start by inserting a node with a particular value.  Now let's insert a second value.  If this new value is smaller, we move leftward, or if it's bigger, we move rightward.

Example: let's put in a node with the value 10.  Now if we insert a node with the value 5, it would go to the left of 10, like so:
```js
/*
        [10]
       /
    [5]
*/
```
If we added a node valued 30, we start at 10, then insert to the right:
```js
/*
        [10]
       /    \
    [ 5]    [30]
*/
```
Now let's insert the value 8.  We start with 10, and since 8 < 10, we move to the left.  Now at the value 5, we move to the right since 5 < 8.  Now let's insert the node:
```js
/*
        [10]
       /    \
    [ 5]    [30]
       \
      [ 8]
*/
```
Let's suppose we want to find the value 30.  We'd start at 10, then move right since 10 < 30.  Now we happen to find the value 30.  Notice that we never looked at any values to the left of 10.

Let's define our classes for our nodes and binary search tree:
```js
class BSTNode { // Defines our Nodes
    constructor(value) {
        this.val = value; // Holds a value for this node
        this.left = null; // Points to nodes to the left of this one
        this.right = null; // Points to nodes to the right of this one
    }
}

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
```

## Useful terms for BSTs:

- Root: The topmost node in the tree
- Height: The number of levels, or generations, in the tree
- Leaf: A node with no children
- Balanced tree: When the number nodes to the left of the root and the number of nodes to the right are equal or within one
- Siblings: Nodes that have the same parent
- Subtree: The smaller tree to the left/right of the current node
- Pre-order traversal: Listing nodes in this order: root, left recursively, right recursively
- In-order traversal: Listing nodes in this order: left recursively, root, right recursively
- Post-order traversal: Listing nodes in this order: left recursively, right recursively, root
- Breadth-first search, also called level order: list all nodes one level at a time before moving to the next level