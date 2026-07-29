import { Hono } 
from "npm:hono";


import {
getMenu,
createMenu
}

from "./controller.ts";

export const menuRoutes =
new Hono();

menuRoutes.get(
 "/",
 getMenu
);

menuRoutes.post(
 "/",
 createMenu
);

Now:
GET /menu

calls:
getMenu()

and
POST /menu

calls:
createMenu()
