const { default: BigNumber } = require("bignumber.js");

const realNumber = (number, decimals = 18) => {
  return new BigNumber(number)
    .dividedBy(new BigNumber(10).pow(decimals))
    .toString();
};

let n1 = realNumber("116236498089724681084065", 16);
console.log("n1", n1);
