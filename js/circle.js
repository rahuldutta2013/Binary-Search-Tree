//function to draw line
function Circle() {
    this.drawCircle = function (x, y) {
        var r = 10; 
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    this.clearCanvas = function(){
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
}




// //function to draw line
// function Line() {
//     var canvas = document.getElementById('myCanvas'),
//         ctx = canvas.getContext('2d');
//     this.drawLine = function (x1, y1, x2, y2) {
//         ctx.moveTo(x1, y1);
//         ctx.lineTo(x2, y2);
//         ctx.stroke();
//         ctx.beginPath();
//     }
// }
