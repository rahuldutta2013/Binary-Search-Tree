function DeleteNode(tree, val)
{
    // base case
    if (!tree) return;

    // If the key to be deleted is smaller than the root's key,
    // then it lies in left subtree
    if (val < tree.value) {
        tree.left = DeleteNode(tree.left, val);
    }

    // If the key to be deleted is greater than the root's key,
    // then it lies in right subtree
    else if (val > tree.value)
        tree.right = DeleteNode(tree.right, val);

    // if key is same as root's key, then This is the node
    // to be deleted
    else {
        // node with only one child or no child
        if (tree.left == '')
        {
            var obj = tree.right;
            return obj;
        }
        else if (tree.right == '')
        {
            var obj = tree.left;
            return obj;
        }

        // node with two children: Get the inorder successor (smallest
        // in the right subtree)
        var obj = minValueNode(tree.right);

        // Copy the inorder successor's content to this node
        tree.value = obj.value;

        // Delete the inorder successor
        tree.right = DeleteNode(tree.right, obj.value);
    }
    return tree;
}

function minValueNode(subTree)
{
    var obj = {};
    obj = subTree;
 
    /* loop down to find the leftmost leaf */
    while (obj.left != '')
        obj = obj.left;
 
    return obj;
}
var arr = [];


// function inorder(node,val){
//     if(!node){
//         return;
//     }
// else(node){
//       inorder(node.left);
//       arr.push(node.value);
//       inorder(node.right);
//    }
//    return arr;
// }




function height(node)
{
    if (node.value === undefined)
        return 0;
    else
    {
        /* compute the height of each subtree */
        var lheight = height(node.left);
        var rheight = height(node.right);
 
        /* use the larger one */
        if (lheight > rheight)
            return(lheight+1);
        else return(rheight+1);
    }
}



 
/* Function to print level order traversal a tree*/
function printLevelOrder(node)
// 
{
    arr = [];
    var h = height(node);
    var i;
    for (i=1; i<=h; i++){
        printGivenLevel(node, i);
    }
        
        return arr;
}
 
/* Print nodes at a given level */
function printGivenLevel(node,  level)
{
    if (node == '')
        return;
    if (level == 1){
        arr.push(node.value);
        // console.log(node.value);
    }
     
    else if (level > 1)
    {
        printGivenLevel(node.left, level-1);
        printGivenLevel(node.right, level-1);
    }
    
}