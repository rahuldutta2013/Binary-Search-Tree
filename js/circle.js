//function to draw circle
function Circle() {
    this.drawCircle = function (x, y, color) {
        var r = 15;//circle radius
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        if (!color) {
            ctx.fillStyle = '#0066cc';
        } else {
            ctx.fillStyle = color;
        }
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#004080';
        ctx.stroke();
    }
    this.clearCanvas = function () {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
}