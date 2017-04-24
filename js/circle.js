//function to draw line
function Circle() {
    this.drawCircle = function (x, y, color) {
        var r = 13;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = '#0066cc';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#004080';
        ctx.stroke();
    }
    this.clearCanvas = function () {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
}