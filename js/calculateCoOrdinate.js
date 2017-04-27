function CalculateCoOrdinate() {
    //function to calculate co-ordinate of root node
    this.calRoot = function () {
        var obj = {};
        obj.x = rootX;
        obj.y = rootY;
        return obj;//returning obj of co-ordinate
    }
    //function to calculate co-ordinate of left child
    this.calLeft = function (parentX, parentY, level, canvaswidth) {
        var obj = {};
        var x;
        var divide = Math.pow(2, level);
        canvaswidth = canvaswidth - (Math.pow(2, level) * 10);
        var xDiv = canvaswidth / divide;
        x = parentX - (xDiv / 2);
        obj.x = x;
        obj.y = parentY + y;
        return obj;//returning obj of co-ordinate
    }
    //function to calculate co-ordinate of right child
    this.calRight = function (parentX, parentY, level, canvaswidth) {
        var obj = {};
        var x;
        var divide = Math.pow(2, level);
        canvaswidth = canvaswidth - (Math.pow(2, level) * 10);
        var xDiv = canvaswidth / divide;
        x = parentX + (xDiv / 2);
        obj.x = x;
        obj.y = parentY + y;
        return obj;//returning obj of co-ordinate
    }
}