import React from "react";
import Login from "../pages/Login";
import Jog from "../pages/Jog";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  JOGS = "/",
  INFO = "/info",
  CONTACT = "/contact",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
  { path: RouteNames.INFO, exact: true, component: Jog },
  { path: RouteNames.CONTACT, exact: true, component: Jog },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.JOGS, exact: true, component: Jog },
];
