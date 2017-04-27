//function to draw line
function Line() {
    this.drawLine = function (x1, y1, x2, y2, color) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}