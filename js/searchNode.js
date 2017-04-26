function Search() {
    var obj = {},
        foundCoOrdinate;
    this.dfs = function (tree, val) {
        if (tree) {
            if (tree.value == val) {
                obj.x = tree.coOrdinate.x;
                obj.y = tree.coOrdinate.y;
                obj.value = tree.value;
                return obj;
            }
            else if (val > tree.value) {
                if (tree.right !== '') {
                    tree = tree.right;
                    foundCoOrdinate = this.dfs(tree, val);
                    return foundCoOrdinate;
                }
            } else if (tree.value > val) {
                if (tree.left !== '') {
                    tree = tree.left;
                    foundCoOrdinate = this.dfs(tree, val);
                    return foundCoOrdinate;
                }

            }
        }else{
            return;
        }

    }
}