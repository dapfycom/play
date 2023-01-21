import {
  CoinsIcon,
  FarmIcon,
  FireIcon,
  PlayIcon,
  SwapIcon,
} from "components/icons/ui-icons";
import Layout from "components/Layout/Layout";
import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
import CoinFlipView from "views/CoinFlipView";
import FarmView from "views/FarmView";

const SwapView = React.lazy(() => import("views/SwapView"));
const PlayView = React.lazy(() => import("views/PlayView"));
const TheForgeView = React.lazy(() => import("views/TheForgeView"));
const SwapLpTab = React.lazy(() => import("views/SwapView/commons/SwapLpTab"));

export const routeNames = {
  swap: "/",
  swapLp: "/swapLp",

  play: "/play",
  coinFlip: "/play/coin-flip",
  forge: "/the-forge",
  farm: "/farm",
  stake: "/stake",
};

export const mainSiteRoutes = [
  {
    path: routeNames.swap,
    element: <SwapView />,
    title: "Swap",
    icon: <SwapIcon fontSize={"23px"} />,
    children: [
      {
        path: "/",
        element: <SwapLpTab />,
      },
      {
        path: "/swapLp",
        element: <SwapLpTab />,
      },
    ],
  },
  {
    path: routeNames.farm,
    element: <FarmView />,
    title: "Farm",
    icon: <FarmIcon fontSize={"25px"} />,
  },
  {
    path: routeNames.play,
    element: <Outlet />,
    title: "Play",
    icon: <PlayIcon fontSize={"25px"} />,
    children: [
      {
        path: routeNames.play + "/",
        element: <PlayView />,
      },
      {
        path: routeNames.coinFlip,
        element: <CoinFlipView />,
        title: "Coin flip",
        icon: <CoinsIcon fontSize={"23px"} />,
      },
      {
        path: "/play/game2",
        element: <SwapLpTab />,
        title: "Game 2",
        icon: <CoinsIcon fontSize={"23px"} />,
      },
      {
        path: "/play/game3",
        element: <SwapLpTab />,
        title: "Game 3",
        icon: <CoinsIcon fontSize={"23px"} />,
      },
    ],
  },

  {
    path: routeNames.forge,
    element: <TheForgeView />,
    title: "The forge",
    icon: <FireIcon fontSize={"20px"} />,
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: mainSiteRoutes,
  },
];
