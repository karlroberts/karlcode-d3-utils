"use strict";
// returns the max side of a square that can fit num squares in a x,y rectangular space
function bestSquareTiles(x, y, n) {
    //prevent div/0
    if (n === 0 || x === 0 || y === 0)
        return 0;
    var px = Math.ceil(Math.sqrt((n * x) / y));
    var sx = undefined;
    var sy = undefined;
    if (Math.floor((px * y) / x) * px < n) {
        sx = y / Math.ceil((px * y) / x);
    }
    else {
        sx = x / px;
    }
    var py = Math.ceil(Math.sqrt((n * y) / x));
    if (Math.floor((py * x) / y) * py < n) {
        sy = x / Math.ceil((x * py) / y);
    }
    else {
        sy = y / py;
    }
    var ret = Math.max(sx, sy);
    //  console.log("kkkkkkkkkkkkkk ret" + ret);
    return ret;
}
exports.bestSquareTiles = bestSquareTiles;
/**
     * Calc the xpos in the SVG of the center of the node given it's index
     * and the max size of a side and the width available
     **/
function calcCentroidXYPos(index, side, width, height) {
    var ret = {
        "x": 0,
        "y": 0
    };
    var numX = Math.floor(width / side);
    var numY = Math.floor(height / side);
    var marginX = (width - (side * numX)) / 2;
    var marginY = (height - (side * numY)) / 2;
    var xPos = marginX + (index.mod(numX) * side) + (side / 2);
    var yPos = marginY + (Math.floor(index / numX) * side) + (side / 2);
    return {
        "x": xPos,
        "y": yPos
    };
}
exports.calcCentroidXYPos = calcCentroidXYPos;
/**
     * Calc the xpos in the SVG of the top left of the node given it's index
     * and the max size of a side and the width available
     **/
function calcTopLeftXYPos(index, side, width, height) {
    var ret = {
        "x": 0,
        "y": 0
    };
    var numX = Math.floor(width / side);
    var numY = Math.floor(height / side);
    var marginX = (width - (side * numX)) / 2;
    var marginY = (height - (side * numY)) / 2;
    var xPos = marginX + (index.mod(numX) * side); // + (side / 2);
    var yPos = marginY + (Math.floor(index / numX) * side); // + (side / 2);
    return {
        "x": xPos,
        "y": yPos
    };
}
exports.calcTopLeftXYPos = calcTopLeftXYPos;
//# sourceMappingURL=geometry.js.map