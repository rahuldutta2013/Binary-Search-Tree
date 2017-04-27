function bstTree() {
    var val;
    var myTree = new Node(val);//creating a blank node

    //function to push node into the tree
    this.createTree = function (val) {
        var newNode = new Node(parseInt(val));//creating a new node with entered value
        if (myTree.value === '') {
            myTree.value = newNode.value;
            myTree.label = 1;
            var rootOrdinate = myCoOrdinate.calRoot();
            myTree.coOrdinate = rootOrdinate;
            return myTree;
        }
        if (myTree.value !== '') {
            var arrOfLine = new travarseTree(newNode, myTree);//getting an array of line
        }
        return myTree;//returning a tree with nodes and co-ordinates
    }

    //a private function to travarse the tree and pushing respective co-ordinates into the tree 
    var travarseTree = function (newObj, obj) {
        if (newObj.value > obj.value) {
            if (obj.right !== '') {
                obj = obj.right;
                travarseTree(newObj, obj);
            } else {
                newObj.label = obj.label + 1;
                obj.right = newObj;
                var rightNode = myCoOrdinate.calRight(obj.coOrdinate.x, obj.coOrdinate.y, obj.label, canvasWidth);
                obj.right.coOrdinate = rightNode;
                var lineObj = {};
                lineObj.lineStart = obj.coOrdinate;
                lineObj.lineEnd = obj.right.coOrdinate;
                arrOfLine.push(lineObj);
            }
        } else {
            if (obj.left !== '') {
                obj = obj.left;
                travarseTree(newObj, obj);
            } else {
                newObj.label = obj.label + 1;
                obj.left = newObj;
                var leftNode = myCoOrdinate.calLeft(obj.coOrdinate.x, obj.coOrdinate.y, obj.label, canvasWidth);
                obj.left.coOrdinate = leftNode;
                var lineObj = {};
                lineObj.lineStart = obj.coOrdinate;
                lineObj.lineEnd = obj.left.coOrdinate;
                arrOfLine.push(lineObj);//populating the line array
            }
        }
    }
}