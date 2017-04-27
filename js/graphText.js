//function to write text
function GraphText() {
    var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d');
    this.fillText = function (x, y, val, color) {
         ctx.fillStyle = color;
        ctx.font = "11px Arial";
        ctx.fillText(val, x-5, y); 
    }
};