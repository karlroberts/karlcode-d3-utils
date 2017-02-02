declare global {
  interface Number {
    mod(n:number): number
  }
}

if(!Number.prototype.mod )
{
  Number.prototype.mod = function (n: number) {
          return ((this % n) + n) % n;
  }
}

let mynum: number = 13
let foo = mynum.mod(5); //compiles fine

let desc = "Number shims run ... 13.mod(5) = "+ foo;

export default desc;