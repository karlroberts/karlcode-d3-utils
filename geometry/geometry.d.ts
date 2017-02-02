export declare function bestSquareTiles(x: number, y: number, n: number): number;
/**
     * Calc the xpos in the SVG of the center of the node given it's index
     * and the max size of a side and the width available
     **/
export declare function calcCentroidXYPos(index: number, side: number, width: number, height: number): {
    "x": number;
    "y": number;
};
/**
     * Calc the xpos in the SVG of the top left of the node given it's index
     * and the max size of a side and the width available
     **/
export declare function calcTopLeftXYPos(index: number, side: number, width: number, height: number): {
    "x": number;
    "y": number;
};
