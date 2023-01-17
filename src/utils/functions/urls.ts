import { routeNames } from "config/routes";

export const getWebUrl = (path: string = ""): string => {
  return `${window.location.origin + path}`;
};

export const isActiveRoute = (routeName: string, location: string) => {
  if (routeName === "/") {
    return location === routeName || location === routeNames.swapLp;
  }
  return location.includes(routeName);
};
