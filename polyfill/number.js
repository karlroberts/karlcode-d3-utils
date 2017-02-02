"use strict";
if (!Number.prototype.mod) {
    Number.prototype.mod = function (n) {
        return ((this % n) + n) % n;
    };
}
var mynum = 13;
var foo = mynum.mod(5); //compiles fine
var desc = "Number shims run ... 13.mod(5) = " + foo;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = desc;
//# sourceMappingURL=number.js.map