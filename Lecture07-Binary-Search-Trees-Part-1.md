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
class BTNode { // Defines our Nodes
    constructor(value) {
        this.val = value; // Holds a value for this node
        this.left = null; // Points to nodes to the left of this one
        this.right = null; // Points to nodes to the right of this one
    }
}

class BST { // Definition of our Binary Search Tree (BST)
    constructor() {
        this.root = null; // Points to the topmost node in the tree - initially there is no node there
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

    // Insert other methods here, like adding a node, finding the tree's depth, size of tree, etc.
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