var input,
    submit,
    canvas,
    ctx,
    myTree,
    canvasHeight,
    canvasWidth,
    rootX,
    rootY;

function init() {
    input = $('input[type=number]');
    submit = $('button');
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    myTree = new BinerySearchTree();
}

function bindEvent() {
    $(document).on('click', 'button', function () {
        parseInput(input);
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
    rootY = (canvasHeight*5)/100;
}

$(document).ready(function () {
    init();
    bindEvent();
    CanvasResponsive(canvas);
});