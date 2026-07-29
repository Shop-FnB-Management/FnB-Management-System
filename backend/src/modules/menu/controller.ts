import * as service
from "./service.ts";

export async function getMenu(c:any){

 const menu =
 await service.getMenu();


 return c.json(menu);

}

export async function createMenu(c:any){

 const body =
 await c.req.json();


 const item =
 await service.createMenu(body);


 return c.json(item);

}