//function to delete node
function DeleteNode(tree, val) {
    if (!tree) {
        return;
    }
    if (val < tree.value) {
        tree.left = DeleteNode(tree.left, val);
    } else if (val > tree.value) {
        tree.right = DeleteNode(tree.right, val);
    } else {
        // node with only one child or no child
        if (tree.left == '') {
            var obj = tree.right;
            return obj;
        } else if (tree.right == '') {
            var obj = tree.left;
            return obj;
        }
        var obj = minValueNode(tree.right);// node with two children: Get the inorder successor (smallest in the right subtree)
        // Copy the inorder successor's content to this node
        tree.value = obj.value;
        // Delete the inorder successor
        tree.right = DeleteNode(tree.right, obj.value);
    }
    return tree;
}

//function to find inorder successor
function minValueNode(subTree) {
    var obj = {};
    obj = subTree;
    // loop down to find the leftmost leaf 
    while (obj.left != '') {
        obj = obj.left;
    }
    return obj;
}


var arr = [];//creating an global array to store nodes arranged in level order

//function to find the height of the tree
function height(node) {
    if (!node) {
        return 0;
    } else if (node) {
        /* compute the height of each subtree */
        var lheight = height(node.left);
        var rheight = height(node.right);
        /* use the larger one */
        if (lheight > rheight) {
            return (lheight + 1);
        } else
            return (rheight + 1);
    }
}

/* Function to print level order traversal a tree*/
function printLevelOrder(node) {
    arr = [];
    var h = height(node);
    var i;
    for (i = 1; i <= h; i++) {
        printGivenLevel(node, i);
    }
    return arr;
}

//function to create an array of nodes arranged in level order
function printGivenLevel(node, level) {
    if (node == '') {
        return;
    }
    if (level == 1) {
        arr.push(node.value);
    } else if (level > 1) {
        printGivenLevel(node.left, level - 1);
        printGivenLevel(node.right, level - 1);
    }
}