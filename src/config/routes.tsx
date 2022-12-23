import { FireIcon, PlayIcon, SwapIcon } from "components/icons/ui-icons";
import Layout from "components/Layout/Layout";
import { RouteObject } from "react-router-dom";
import SwapView from "views/SwapView";

export const routeNames = {
  swap: "/",
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
    // loader: teamLoader,
  },
  {
    path: routeNames.play,
    element: <div>Play</div>,
    title: "Play",
    icon: <PlayIcon fontSize={"25px"} />,
    // loader: teamLoader,
  },
  {
    path: routeNames.forge,
    element: <div>Page</div>,
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
