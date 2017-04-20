var myCoOrdinate = new CalculateCoOrdinate();
function BinerySearchTree() {
    this.value = '';
    this.left = '';
    this.right = '';
}

function CreateTree(val) {
    var newNode = new Node(parseInt(val));
    if (myTree.value === '') {
        myTree.value = newNode.value;
        var rootOrdinate = myCoOrdinate.calRoot();
        myTree.coOrdinate = rootOrdinate;
        return myTree;
    }
    if (myTree.value !== '') {
        travarseTree(newNode, myTree);
    }
    return myTree;
}

function travarseTree(newObj, obj) {
    if (newObj.value > obj.value) {
        if (obj.right !== '') {
            obj = obj.right;

            travarseTree(newObj, obj);
        } else {
            obj.right = newObj;
            var rightNode = myCoOrdinate.calRight(obj.coOrdinate.x, obj.coOrdinate.y);       
            obj.right.coOrdinate = rightNode;
        }
    } else {
        if (obj.left !== '') {
            obj = obj.left;
            travarseTree(newObj, obj);
        } else {
            obj.left = newObj;
            var leftNode = myCoOrdinate.calLeft(obj.coOrdinate.x, obj.coOrdinate.y);
            obj.left.coOrdinate = leftNode;
        }
    }
}