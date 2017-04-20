function parseInput(input) {
    var newVal = input.val();
    var createMyTree = new CreateTree(newVal);
    var myCircle = new Circle();
    myCircle.clearCanvas();//clearing the previous canvas value
    var renderMyTree = new RenderTree(createMyTree);
}



