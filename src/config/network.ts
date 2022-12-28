export type ENVIROMENTTYPE = "testnet" | "mainnet" | "devnet";

const networkConfig = {
  mainnet: {
    network: {
      id: "mainnet",
      name: "Mainnet",
      egldLabel: "EGLD",
      walletAddress: "https://wallet.elrond.com",
      apiAddress:
        process.env.NEXT_PUBLIC_ELROND_API || "https://api.elrond.com",
      gatewayAddress: "https://gateway.elrond.com",
      explorerAddress: "http://explorer.elrond.com",
      graphQlAddress: "https://exchange-graph.elrond.com/graphql",
      apiTimeout: 10000,
      walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
    },
    ChainID: "1",
    tokensID: {
      egld: "EGLD",
      wegld: "WEGLD-bd4d79",
      bsk: "BSK-baa025",
    },

    scAddress: {
      maiarBskSwap:
        "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
    },
  },
  devnet: {
    network: {
      id: "devnet",
      name: "Devnet",
      egldLabel: "xEGLD",
      walletAddress: "https://devnet-wallet.elrond.com",
      apiAddress:
        process.env.NEXT_PUBLIC_ELROND_API || "https://devnet-api.elrond.com",
      gatewayAddress: "https://devnet-gateway.elrond.com",
      explorerAddress: "http://devnet-explorer.elrond.com",
      graphQlAddress: "https://devnet-exchange-graph.elrond.com/graphql",
      apiTimeout: 10000,
      walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
    },
    ChainID: "D",
    tokensID: {},
    scAddress: {},
  },
  testnet: {
    network: {
      id: "testnet",
      name: "Testnet",
      egldLabel: "xEGLD",
      walletAddress: "https://testnet-wallet.elrond.com",
      apiAddress:
        process.env.NEXT_PUBLIC_ELROND_API || "https://testnet-api.elrond.com",
      gatewayAddress: "https://testnet-gateway.elrond.com",
      explorerAddress: "http://testnet-explorer.elrond.com",
      graphQlAddress: "https://testnet-exchange-graph.elrond.com/graphql",
      apiTimeout: 10000,
      walletConnectBridgeAddresses: ["https://bridge.walletconnect.org"],
    },
    ChainID: "T",
    tokensID: {},
    scAddress: {},
  },
};
export const ENVIROMENT: ENVIROMENTTYPE = "mainnet";

export const selectedNetwork = networkConfig[ENVIROMENT];
