function Render() {
    var colorCircle = '#0066cc';
    var colorText = 'white';
    var colorLine = '#0066cc';
    this.renderLine = function (lineArr) {
        if (lineArr !== undefined) {
            var myLine = new Line();
            var len = lineArr.length;
            for (var i = 0; i < len; i++) {
                myLine.drawLine(lineArr[i].lineStart.x, lineArr[i].lineStart.y, lineArr[i].lineEnd.x, lineArr[i].lineEnd.y,colorLine);
            }
        }
    }
    this.renderTree = function (treeObj) {
        if (treeObj) {    
            this.renderTree(treeObj.left);
            this.renderTree(treeObj.right);
            var myCircle = new Circle();
            myCircle.drawCircle(treeObj.coOrdinate.x, treeObj.coOrdinate.y , colorCircle);
            
            myText.fillText(treeObj.coOrdinate.x - 2, treeObj.coOrdinate.y + 2, treeObj.value, colorText);
        }
    }
   
    // console.log(treeObj);
}