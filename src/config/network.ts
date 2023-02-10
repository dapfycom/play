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
      ride: "RIDE-7d18e9",
      hodl: "HODL-d7f4b5",
      usdc: "USDC-c76f1f",
      rare: "RARE-99e8b0",
    },

    scAddress: {
      maiarRouter:
        "erd1qqqqqqqqqqqqqpgqq66xk9gfr4esuhem3jru86wg5hvp33a62jps2fy57p",
      maiarBskSwap:
        "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
      wrapEgld:
        "erd1qqqqqqqqqqqqqpgqvc7gdl0p4s97guh498wgz75k8sav6sjfjlwqh679jy",
      wrapEgldShar1:
        "erd1qqqqqqqqqqqqqpgqhe8t5jewej70zupmh44jurgn29psua5l2jps3ntjj3",
      wrapEgldShar2:
        "erd1qqqqqqqqqqqqqpgqmuk0q2saj0mgutxm4teywre6dl8wqf58xamqdrukln",
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
    tokensID: {
      egld: "EGLD",
      wegld: "WEGLD-d7c6bb",
      bsk: "USDC-8d4068", // this is wrong, because we don't have a BSK token on devnet
    },
    scAddress: {
      maiarBskSwap:
        "erd1qqqqqqqqqqqqqpgqzmjm474k89alpve4gp7x4gz25wfj4xzv2jpsy2my02",
      wrapEgld:
        "erd1qqqqqqqqqqqqqpgqmuk0q2saj0mgutxm4teywre6dl8wqf58xamqdrukln",
    },
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
