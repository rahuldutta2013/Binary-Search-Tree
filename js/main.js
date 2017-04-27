var searchNode,
    deleteNode,
    enterArrOfNode,
    canvas,
    ctx,
    canvasHeight,
    canvasWidth,
    rootX,
    rootY,
    createTreeObj,
    arrOfLine = [],
    myCoOrdinate,
    newTree,
    myCircle,
    renderMyTree,
    myText;
const y = 50,//difference of every level of tree 
    searchedNodeColor = 'green',
    colorText = 'white',
    colorCircle = '#0066cc',
    colorLine = '#0066cc';

function init() {
    searchNode = $('#searchNode');
    deleteNode = $('#deleteNode');
    enterArrOfNode = $('#arrayNode');
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    createTreeObj = new bstTree();
    myCoOrdinate = new CalculateCoOrdinate();
    myCircle = new Circle();
    renderMyTree = new Render();
    myText = new GraphText();
}

function bindEvent() {

    //function to create tree with user input
    enterArrOfNode.keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            var inputArr = new ParseInputFromArray();
            var nodes = inputArr.parseFromArr(enterArrOfNode);
            if (nodes) {
                var len = nodes.length;
                for (var i = 0; i < len; i++) {
                    var mySearch = new Search();
                    var searchedNode = mySearch.dfs(newTree, nodes[i]);
                    if (searchedNode) {
                        alert('same entry');
                        return;
                    } else {
                        newTree = createTreeObj.createTree(nodes[i]);//create tree object adding new node
                    }
                }
                myCircle.clearCanvas();//clearing the previous canvas value
                renderMyTree.renderLine(arrOfLine);//create line
                renderMyTree.renderTree(newTree);//create tree        
            }
        }
    });

    //detecting search node
    searchNode.keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            var searchedVal = searchNode.val();
            searchNode.val('');
            var mySearch = new Search();
            var searchedNode = mySearch.dfs(newTree, searchedVal);
            myCircle.clearCanvas();//clearing the previous canvas value
            renderMyTree.renderLine(arrOfLine);//create line
            renderMyTree.renderTree(newTree);//create tree
            if (searchedNode) {
                myCircle.drawCircle(searchedNode.x, searchedNode.y, searchedNodeColor);//draw circle of different color
                myText.fillText(searchedNode.x - 2, searchedNode.y + 2, searchedNode.value, colorText);//write text on searched node
            } else {
                alert('not found');
            }
        }
    });

    //detect delete node
    deleteNode.keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            var val = deleteNode.val();
            deleteNode.val('');
            var mySearch = new Search();
            var searchedNode = mySearch.dfs(newTree, val);//for delete we first need to search that node
            if (searchedNode) {
                var d = new DeleteNode(newTree, val);
                var arrOfNodes = printLevelOrder(d);
                arrOfLine = [];
                if (arrOfNodes) {
                    var len = arrOfNodes.length;
                    newTree.value = '';
                    newTree.coOrdinate = '';
                    newTree.label = '';
                    newTree.left = '';
                    newTree.right = '';
                    for (var i = 0; i < len; i++) {
                        newTree = createTreeObj.createTree(arrOfNodes[i]);//create tree object without the deleted node
                    }
                }
                myCircle.clearCanvas();//clearing the previous canvas value
                renderMyTree.renderLine(arrOfLine);//create line
                if (newTree) {
                    renderMyTree.renderTree(newTree);//create tree 
                }
            } else {
                alert('node doesnot exist');
            }
        }
    });

    //resize window and see responsive tree
    $(window).on('resize', function () {
        CanvasResponsive(canvas);
    });
}

//function to create dynamic height and width of the canvas and also create responsive tree
function CanvasResponsive(canvasId) {
    canvasHeight = (window.innerHeight * 85) / 100;
    canvasWidth = (window.innerWidth * 90) / 100;
    canvasId.setAttribute("width", canvasWidth);  //setting responsive width to canvas 
    canvasId.setAttribute("height", canvasHeight);//setting responsive height to canvas 
    var halfOfWidth = canvasWidth / 2;
    canvasId.style.marginLeft = -halfOfWidth + 'px';
    rootX = halfOfWidth;
    rootY = (canvasHeight * 5) / 100;
    var arrOfNodes = printLevelOrder(newTree);//getting an array of existing nodes
    arrOfLine = [];//empty the line array
    if (arrOfNodes) {
        var len = arrOfNodes.length;
        //empty the previous tree
        if (newTree) {
            newTree.value = '';
            newTree.coOrdinate = '';
            newTree.label = '';
            newTree.left = '';
            newTree.right = '';
        }
        for (var i = 0; i < len; i++) {
            newTree = createTreeObj.createTree(arrOfNodes[i]);//create new tree with new co-ordinate w.r.t window size
        }
        myCircle.clearCanvas();//clearing the previous canvas value
        renderMyTree.renderLine(arrOfLine);//create line
        if (newTree) {
            renderMyTree.renderTree(newTree);//create tree  
        }
    }
}

$(document).ready(function () {
    init();
    bindEvent();
    CanvasResponsive(canvas);
});