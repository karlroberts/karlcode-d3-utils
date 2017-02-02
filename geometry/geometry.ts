import { Component, OnInit } from '@angular/core';

    // returns the max side of a square that can fit num squares in a x,y rectangular space
  export function bestSquareTiles(x: number, y: number, n: number) {
    //prevent div/0
    if (n === 0 || x === 0 || y === 0) return 0;

    let px = Math.ceil(Math.sqrt((n * x) / y));
    let sx:number = undefined;
    let sy: number = undefined;

    if (Math.floor((px * y) / x) * px < n) { //does not fit, y/(x/px)=px*y/x
      sx = y / Math.ceil((px * y) / x);
    } else {
      sx = x / px;
    }

    let py = Math.ceil(Math.sqrt((n * y) / x));

    if (Math.floor((py * x) / y) * py < n) { //does not fit
      sy = x / Math.ceil((x * py) / y);
    } else {
      sy = y / py;
    }

    let ret = Math.max(sx, sy);
  //  console.log("kkkkkkkkkkkkkk ret" + ret);
    return ret;
}

/**
     * Calc the xpos in the SVG of the center of the node given it's index
     * and the max size of a side and the width available
     **/

export function calcCentroidXYPos(index: number, side: number, width: number, height: number) {
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
  

    /**
         * Calc the xpos in the SVG of the top left of the node given it's index
         * and the max size of a side and the width available
         **/
        
    export function calcTopLeftXYPos (index: number, side: number, width: number, height: number) {
      var ret = {
        "x": 0,
        "y": 0
      };
      var numX = Math.floor(width / side);
      var numY = Math.floor(height / side);
      var marginX = (width - (side * numX)) / 2;
      var marginY = (height - (side * numY)) / 2;

      var xPos = marginX + (index.mod(numX) * side);// + (side / 2);
      var yPos = marginY + (Math.floor(index / numX) * side);// + (side / 2);

      return {
        "x": xPos,
        "y": yPos
      };
    }

    


