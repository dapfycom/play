const { TokenTransfer } = require("@multiversx/sdk-core");

let token = TokenTransfer.fungibleFromAmount("FOO-6ce17b", "56", 0);
console.log("token", token.amountAsBigInteger.toString());
