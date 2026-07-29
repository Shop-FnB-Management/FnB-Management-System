import { Hono } from "npm:hono";

import { createMenu, getMenu } from "./controller.ts";

export const menuRoutes = new Hono();

menuRoutes.get(
  "/",
  getMenu,
);

menuRoutes.post(
  "/",
  createMenu,
);
