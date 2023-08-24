const {
  TokenTransfer,
  BytesValue,
  decodeBigNumber,
} = require("@multiversx/sdk-core");

const var1 = parseInt("03862f342636c7db0011e0", 16).toString(10);
const buff = new Buffer.from("4d45582d646332383963", "hex").toString();
console.log("var1", var1);
console.log("buff", buff);
