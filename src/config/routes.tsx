import { CalendarIcon, HamburgerIcon, RepeatClockIcon } from "@chakra-ui/icons";
import {
  CoinsIcon,
  FarmIcon,
  FireIcon,
  GiveawaysIcon,
  MultipleMessageIcon,
  PlayIcon,
  SendMessageIcon,
  SwapIcon,
  TwitterIcon,
} from "components/icons/ui-icons";
import FreeBirdLayOut from "components/Layout/FreeBirdLayOut";
import Layout from "components/Layout/MainLayout";
import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
import WelcomeMessage from "views/FreeBird/WelcomeMessage/WelcomeMessage";

const SwapView = React.lazy(() => import("views/SwapView"));
const PlayView = React.lazy(() => import("views/PlayView"));
const TheForgeView = React.lazy(() => import("views/TheForgeView"));
const SwapLpTab = React.lazy(() => import("views/SwapView/commons/SwapLpTab"));
const FarmView = React.lazy(() => import("views/FarmView"));
const CoinFlipView = React.lazy(() => import("views/CoinFlipView"));

export const routeNames = {
  swap: "/",
  swapLp: "/swapLp",

  play: "/play",
  coinFlip: "/play/coin-flip",
  forge: "/the-forge",
  farm: "/farm",
  stake: "/stake",
  freebird: "/freebird",
  freebirdWelcomeMessage: "/freebird/welcome",
  freebirdBulkDms: "/freebird/bulk-dms",
  freebirdSchedule: "/freebird/schedule",
  freebirdGiveaways: "/freebird/giveaways",
  freebirdFollow: "/freebird/follow",
  freebirdLeads: "/freebird/leads",
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
  {
    path: routeNames.freebird,
    element: <FreeBirdLayOut />,
    title: "Free Bird App",
    icon: <TwitterIcon fontSize={"25px"} />,

    children: [
      {
        path: routeNames.freebirdWelcomeMessage,
        title: "Welcome message",
        element: <WelcomeMessage />,
        icon: SendMessageIcon,
      },
      {
        path: routeNames.freebirdBulkDms,
        element: <CoinFlipView />,
        title: "Bulk DMs",
        icon: MultipleMessageIcon,
      },
      {
        path: routeNames.freebirdSchedule,
        element: <SwapLpTab />,
        title: "Write / Schedule",
        icon: CalendarIcon,
      },
      {
        path: routeNames.freebirdGiveaways,
        element: <SwapLpTab />,
        title: "Giveaways",
        icon: GiveawaysIcon,
      },
      {
        path: routeNames.freebirdFollow,
        element: <SwapLpTab />,
        title: "Follow / Unfollow",
        icon: RepeatClockIcon,
      },
      {
        path: routeNames.freebirdLeads,
        element: <SwapLpTab />,
        title: "Leads",
        icon: HamburgerIcon,
      },
    ],
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: mainSiteRoutes,
  },
];
