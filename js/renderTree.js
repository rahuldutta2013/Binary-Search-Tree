function RenderTree(treeObj) {
    var color = 'green';
    if (treeObj) {
        RenderTree(treeObj.left);
        var myCircle = new Circle();
        myCircle.drawCircle(treeObj.coOrdinate.x, treeObj.coOrdinate.y);
        var myText = new GraphText();
        myText.fillText(treeObj.coOrdinate.x - 2, treeObj.coOrdinate.y + 2, treeObj.value, color)
        RenderTree(treeObj.right);
    }
}