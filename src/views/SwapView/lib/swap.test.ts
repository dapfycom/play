import { selectedNetwork } from "config/network";
import { getSwapPairs, smartSwapRoutes } from "./functions";

test("swap pairs BSK(wegld) <-> RIDE(wegld)", async () => {
  const pairs = await getSwapPairs("BSK-baa025", "RIDE-7d18e9");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
      id: "BSKWEGLD-7cd373",
      symbol: "BSKWEGLD",
      name: "BSKWEGLDLP",
      price: 19.297159575718556,
      baseId: "BSK-baa025",
      basePrice: 0.000004492497725048407,
      baseSymbol: "BSK",
      baseName: "Beskar",
      quoteId: "WEGLD-bd4d79",
      quotePrice: 46.43127781794093,
      quoteSymbol: "WEGLD",
      quoteName: "WrappedEGLD",
      totalValue: 36141.79518109603,
      volume24h: 35.33334171356089,
      state: "active",
      type: "experimental",
    },
    {
      address: "erd1qqqqqqqqqqqqqpgqav09xenkuqsdyeyy5evqyhuusvu4gl3t2jpss57g8x",
      id: "EGLDRIDE-7bd51a",
      symbol: "EGLDRIDE",
      name: "EGLDRIDELP",
      price: 200.22296029005915,
      baseId: "RIDE-7d18e9",
      basePrice: 0.06288190310328767,
      baseSymbol: "RIDE",
      baseName: "holoride",
      quoteId: "WEGLD-bd4d79",
      quotePrice: 46.43127781794093,
      quoteSymbol: "WEGLD",
      quoteName: "WrappedEGLD",
      totalValue: 6139339.528061836,
      volume24h: 64972.20656202925,
      state: "active",
      type: "core",
    },
  ]);
});
test("swap pairs HODL(usdc) <-> BSK(wegld)", async () => {
  const pairs = await getSwapPairs("HODL-d7f4b5", "BSK-baa025");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgq0d6xjg89rg7ae4xw79r6l3hwz65at3rf2jpsh9rtfh",
      id: "HODLUSDC-6dc9c1",
      symbol: "HODLUSDC",
      name: "HODLUSDCLP",
      price: 1.086985697702178e24,
      baseId: "USDC-c76f1f",
      basePrice: 1,
      baseSymbol: "USDC",
      baseName: "WrappedUSDC",
      quoteId: "HODL-d7f4b5",
      quotePrice: 0.0005783581383222447,
      quoteSymbol: "HODL",
      quoteName: "HODL",
      totalValue: 5448.085396,
      volume24h: 0.23019612766444894,
      state: "active",
      type: "jungle",
    },
    {
      address: "erd1qqqqqqqqqqqqqpgqeel2kumf0r8ffyhth7pqdujjat9nx0862jpsg2pqaq",
      id: "EGLDUSDC-594e5e",
      symbol: "EGLDUSDC",
      name: "EGLDUSDCLP",
      price: 4.1352415805402976e23,
      baseId: "WEGLD-bd4d79",
      basePrice: 46.43127781794093,
      baseSymbol: "WEGLD",
      baseName: "WrappedEGLD",
      quoteId: "USDC-c76f1f",
      quotePrice: 1,
      quoteSymbol: "USDC",
      quoteName: "WrappedUSDC",
      totalValue: 15770170.298502,
      volume24h: 1917906.367754791,
      state: "active",
      type: "core",
    },
    {
      address: "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
      id: "BSKWEGLD-7cd373",
      symbol: "BSKWEGLD",
      name: "BSKWEGLDLP",
      price: 19.297159575718556,
      baseId: "BSK-baa025",
      basePrice: 0.000004492497725048407,
      baseSymbol: "BSK",
      baseName: "Beskar",
      quoteId: "WEGLD-bd4d79",
      quotePrice: 46.43127781794093,
      quoteSymbol: "WEGLD",
      quoteName: "WrappedEGLD",
      totalValue: 36141.79518109603,
      volume24h: 35.33334171356089,
      state: "active",
      type: "experimental",
    },
  ]);
});
test("swap pairs BSK(wegld) <-> HODL(usdc)", async () => {
  const pairs = await getSwapPairs("BSK-baa025", "HODL-d7f4b5");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
      id: "BSKWEGLD-7cd373",
      symbol: "BSKWEGLD",
      name: "BSKWEGLDLP",
      price: 19.297159575718556,
      baseId: "BSK-baa025",
      basePrice: 0.000004492497725048407,
      baseSymbol: "BSK",
      baseName: "Beskar",
      quoteId: "WEGLD-bd4d79",
      quotePrice: 46.43127781794093,
      quoteSymbol: "WEGLD",
      quoteName: "WrappedEGLD",
      totalValue: 36141.79518109603,
      volume24h: 35.33334171356089,
      state: "active",
      type: "experimental",
    },
    {
      address: "erd1qqqqqqqqqqqqqpgqeel2kumf0r8ffyhth7pqdujjat9nx0862jpsg2pqaq",
      id: "EGLDUSDC-594e5e",
      symbol: "EGLDUSDC",
      name: "EGLDUSDCLP",
      price: 4.1352415805402976e23,
      baseId: "WEGLD-bd4d79",
      basePrice: 46.43127781794093,
      baseSymbol: "WEGLD",
      baseName: "WrappedEGLD",
      quoteId: "USDC-c76f1f",
      quotePrice: 1,
      quoteSymbol: "USDC",
      quoteName: "WrappedUSDC",
      totalValue: 15770170.298502,
      volume24h: 1917906.367754791,
      state: "active",
      type: "core",
    },

    {
      address: "erd1qqqqqqqqqqqqqpgq0d6xjg89rg7ae4xw79r6l3hwz65at3rf2jpsh9rtfh",
      id: "HODLUSDC-6dc9c1",
      symbol: "HODLUSDC",
      name: "HODLUSDCLP",
      price: 1.086985697702178e24,
      baseId: "USDC-c76f1f",
      basePrice: 1,
      baseSymbol: "USDC",
      baseName: "WrappedUSDC",
      quoteId: "HODL-d7f4b5",
      quotePrice: 0.0005783581383222447,
      quoteSymbol: "HODL",
      quoteName: "HODL",
      totalValue: 5448.085396,
      volume24h: 0.23019612766444894,
      state: "active",
      type: "jungle",
    },
  ]);
});
test("swap pairs RIDE(wegld) <-> WEGLD", async () => {
  const pairs = await getSwapPairs("RIDE-7d18e9", "WEGLD-bd4d79");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgqav09xenkuqsdyeyy5evqyhuusvu4gl3t2jpss57g8x",
      id: "EGLDRIDE-7bd51a",
      symbol: "EGLDRIDE",
      name: "EGLDRIDELP",
      price: 200.22296029005915,
      baseId: "RIDE-7d18e9",
      basePrice: 0.06288190310328767,
      baseSymbol: "RIDE",
      baseName: "holoride",
      quoteId: "WEGLD-bd4d79",
      quotePrice: 46.43127781794093,
      quoteSymbol: "WEGLD",
      quoteName: "WrappedEGLD",
      totalValue: 6139339.528061836,
      volume24h: 64972.20656202925,
      state: "active",
      type: "core",
    },
  ]);
});
test("swap pairs WEGLD <-> RIDE(wegld)", async () => {
  const pairs = await getSwapPairs("WEGLD-bd4d79", "RIDE-7d18e9");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgqav09xenkuqsdyeyy5evqyhuusvu4gl3t2jpss57g8x",
      id: "EGLDRIDE-7bd51a",
      symbol: "EGLDRIDE",
      name: "EGLDRIDELP",
      price: 200.22296029005915,
      baseId: "RIDE-7d18e9",
      basePrice: 0.06288190310328767,
      baseSymbol: "RIDE",
      baseName: "holoride",
      quoteId: "WEGLD-bd4d79",
      quotePrice: 46.43127781794093,
      quoteSymbol: "WEGLD",
      quoteName: "WrappedEGLD",
      totalValue: 6139339.528061836,
      volume24h: 64972.20656202925,
      state: "active",
      type: "core",
    },
  ]);
});
test("swap pairs USDC <-> HODL(usdc)", async () => {
  const pairs = await getSwapPairs("USDC-c76f1f", "HODL-d7f4b5");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgq0d6xjg89rg7ae4xw79r6l3hwz65at3rf2jpsh9rtfh",
      id: "HODLUSDC-6dc9c1",
      symbol: "HODLUSDC",
      name: "HODLUSDCLP",
      price: 1.086985697702178e24,
      baseId: "USDC-c76f1f",
      basePrice: 1,
      baseSymbol: "USDC",
      baseName: "WrappedUSDC",
      quoteId: "HODL-d7f4b5",
      quotePrice: 0.0005783581383222447,
      quoteSymbol: "HODL",
      quoteName: "HODL",
      totalValue: 5448.085396,
      volume24h: 0.23019612766444894,
      state: "active",
      type: "jungle",
    },
  ]);
});
test("swap pairs HODL(usdc) <-> USDC", async () => {
  const pairs = await getSwapPairs("HODL-d7f4b5", "USDC-c76f1f");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgq0d6xjg89rg7ae4xw79r6l3hwz65at3rf2jpsh9rtfh",
      id: "HODLUSDC-6dc9c1",
      symbol: "HODLUSDC",
      name: "HODLUSDCLP",
      price: 1.086985697702178e24,
      baseId: "USDC-c76f1f",
      basePrice: 1,
      baseSymbol: "USDC",
      baseName: "WrappedUSDC",
      quoteId: "HODL-d7f4b5",
      quotePrice: 0.0005783581383222447,
      quoteSymbol: "HODL",
      quoteName: "HODL",
      totalValue: 5448.085396,
      volume24h: 0.23019612766444894,
      state: "active",
      type: "jungle",
    },
  ]);
});
test("swap pairs LAND(usdc) <-> HODL(usdc)", async () => {
  const pairs = await getSwapPairs("LAND-40f26f", "HODL-d7f4b5");

  expect(pairs).toEqual([
    {
      address: "erd1qqqqqqqqqqqqqpgqn530ruk9qkffaucewc3rnf2damhptz2r2jpszcf84t",
      id: "LANDUSDC-5a0772",
      symbol: "LANDUSDC",
      name: "LANDUSDCLP",
      price: 7.414707012662887e23,
      baseId: "USDC-c76f1f",
      basePrice: 1,
      baseSymbol: "USDC",
      baseName: "WrappedUSDC",
      quoteId: "LAND-40f26f",
      quotePrice: 0.009466414057201533,
      quoteSymbol: "LAND",
      quoteName: "Landboard",
      totalValue: 29958.504174,
      state: "active",
      type: "jungle",
    },
    {
      address: "erd1qqqqqqqqqqqqqpgq0d6xjg89rg7ae4xw79r6l3hwz65at3rf2jpsh9rtfh",
      id: "HODLUSDC-6dc9c1",
      symbol: "HODLUSDC",
      name: "HODLUSDCLP",
      price: 1.086985697702178e24,
      baseId: "USDC-c76f1f",
      basePrice: 1,
      baseSymbol: "USDC",
      baseName: "WrappedUSDC",
      quoteId: "HODL-d7f4b5",
      quotePrice: 0.0005783581383222447,
      quoteSymbol: "HODL",
      quoteName: "HODL",
      totalValue: 5448.085396,
      volume24h: 0.23019612766444894,
      state: "active",
      type: "jungle",
    },
  ]);
});

//test routes
test("routes 100000000 BSK <-> WGLD", async () => {
  const routes = await smartSwapRoutes([
    "BSK-baa025",
    "WEGLD-bd4d79",
    100000000,
  ]);
  expect(routes).toEqual([
    {
      token1: "BSK-baa025",
      token2: "WEGLD-bd4d79",
      token1Amount: 100000000,
      token2Amount: 9.675584942253,
      sc: "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
    },
  ]);
});
test("routes 100000000 BSK <-> RIDE", async () => {
  const routes = await smartSwapRoutes([
    "BSK-baa025",
    "RIDE-7d18e9",
    100000000,
  ]);
  expect(routes).toEqual([
    {
      token1: "BSK-baa025",
      token2: "WEGLD-bd4d79",
      token1Amount: 100000000,
      token2Amount: 9.675584942253,
      sc: "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
    },
    {
      token1: "WEGLD-bd4d79",
      token2: "RIDE-7d18e9",
      token1Amount: 9.675584942253,
      token2Amount: 7144.341222734824,
      sc: "erd1qqqqqqqqqqqqqpgqav09xenkuqsdyeyy5evqyhuusvu4gl3t2jpss57g8x",
    },
  ]);
});
test("routes 100000000 HODL <-> BSK", async () => {
  const routes = await smartSwapRoutes([
    selectedNetwork.tokensID.hodl,
    selectedNetwork.tokensID.bsk,
    100000000,
  ]);
  expect(routes).toEqual([
    {
      token1: selectedNetwork.tokensID.hodl,
      token2: selectedNetwork.tokensID.usdc,
      token1Amount: 100000000,
      token2Amount: 57835.81383222447,
      sc: "erd1qqqqqqqqqqqqqpgq0d6xjg89rg7ae4xw79r6l3hwz65at3rf2jpsh9rtfh",
    },
    {
      token1: selectedNetwork.tokensID.usdc,
      token2: selectedNetwork.tokensID.wegld,
      token1Amount: 57835.81383222447,
      token2Amount: 1245.6218426510084,
      sc: "erd1qqqqqqqqqqqqqpgqeel2kumf0r8ffyhth7pqdujjat9nx0862jpsg2pqaq",
    },
    {
      token1: selectedNetwork.tokensID.wegld,
      token2: selectedNetwork.tokensID.bsk,
      token1Amount: 1245.6218426510084,
      token2Amount: 12873866025.519531,
      sc: "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
    },
  ]);
});
