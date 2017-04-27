//function to parse input and returns an array of input
function ParseInputFromArray() {
    this.parseFromArr = function (inputArr) {
        var totalStr = inputArr.val();
        inputArr.val('');
        var array = totalStr.split(",");
        var len = array.length;
        var arrOfNode = [];
        for (var i = 0; i < len; i++) {
            var val = parseInt(array[i]);
            if (isNaN(val)) {
                alert('wrong format');
                return;
            } else {
                arrOfNode.push(val);
            }
        }
        return arrOfNode;
    }
}