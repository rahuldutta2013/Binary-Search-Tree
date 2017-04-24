var input,
    submit,
    canvas,
    ctx,
    canvasHeight,
    canvasWidth,
    rootX,
    rootY,
    createTreeObj,
    arrOfLine = [],
    myCoOrdinate,
    myTree,
    myCircle,
    renderMyTree;
const y = 50;//difference of every level of tree    

function init() {
    input = $('input[type=number]');
    submit = $('button');
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    myTree = new bstTree();
    createTreeObj = new CreateBinarySearchTreeObject();
    myCoOrdinate = new CalculateCoOrdinate();
    myCircle = new Circle();
    renderMyTree = new Render();
}

function bindEvent() {
    $(document).on('click', 'button', function () {
        var newVal = parseInput(input); //getting the input value     
        if (newVal) {
             myCircle.clearCanvas();//clearing the previous canvas value
            var newTree = createTreeObj.createTree(newVal);//create tree object adding new node
            renderMyTree.renderLine(arrOfLine);//create line
            renderMyTree.renderTree(newTree);//create tree
        }else{
            alert('incorrect entry'); 
        }
    });

    $(window).on('resize', function () {
        CanvasResponsive(canvas);
    });
}

//function to create dynamic height and width of the canvas
function CanvasResponsive(canvasId) {
    canvasHeight = (window.innerHeight * 85) / 100;
    canvasWidth = (window.innerWidth * 90) / 100;
    canvasId.setAttribute("width", canvasWidth);  //setting responsive width to canvas 
    canvasId.setAttribute("height", canvasHeight);//setting responsive height to canvas 
    var halfOfWidth = canvasWidth / 2;
    canvasId.style.marginLeft = -halfOfWidth + 'px';
    rootX = halfOfWidth;
    rootY = (canvasHeight * 5) / 100;
}

$(document).ready(function () {
    init();
    bindEvent();
    CanvasResponsive(canvas);
});