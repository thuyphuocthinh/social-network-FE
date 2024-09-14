import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./index";

export function AppRoute() {
  const appRoutes = useRoutes(routes);
  return <> {appRoutes} </>;
}
