import {
  FarmIcon,
  FireIcon,
  PlayIcon,
  SwapIcon,
} from "components/icons/ui-icons";
import Layout from "components/Layout/Layout";
import React from "react";
import { RouteObject } from "react-router-dom";
import FarmView from "views/FarmView";

const SwapView = React.lazy(() => import("views/SwapView"));
const PlayView = React.lazy(() => import("views/PlayView"));
const TheForgeView = React.lazy(() => import("views/TheForgeView"));
const SwapLpTab = React.lazy(() => import("views/SwapView/commons/SwapLpTab"));

export const routeNames = {
  swap: "/",
  swapLp: "/swapLp",
  play: "/play",
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
    // loader: teamLoader,
  },
  {
    path: routeNames.farm,
    element: <FarmView />,
    title: "Farm",
    icon: <FarmIcon fontSize={"25px"} />,
    // loader: teamLoader,
  },
  {
    path: routeNames.play,
    element: <PlayView />,
    title: "Play",
    icon: <PlayIcon fontSize={"25px"} />,
    // loader: teamLoader,
  },

  {
    path: routeNames.forge,
    element: <TheForgeView />,
    title: "The forge",
    icon: <FireIcon fontSize={"20px"} />,
    // loader: teamLoader,
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
    children: mainSiteRoutes,
  },
];
