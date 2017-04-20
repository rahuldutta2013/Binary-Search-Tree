function CalculateCoOrdinate() {

    this.calRoot = function () {
        var obj = {};
        obj.x = rootX;
        obj.y = rootY;
        return obj;
    }
    this.calLeft = function (parentX, parentY) {
        var obj = {};
        parentX -= 30;
        parentY += 30;
        obj.x = parentX;
        obj.y = parentY;
        return obj;
    }
    this.calRight = function (parentX, parentY) {
        var obj = {};
        parentX += 30;
        parentY += 30;
        obj.x = parentX;
        obj.y = parentY;
        return obj;
    }

}