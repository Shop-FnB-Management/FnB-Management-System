import * as repository 
from "./repository.ts";

import { MenuItem } 
from "./types.ts";

export async function createMenu(
 item:MenuItem
){

 return await repository.createMenuItem(item);

}

export async function getMenu(){

 return await repository.findAllMenu();

}

export async function updateMenu(
 id:string,
 data:Partial<MenuItem>
){

 return await repository.updateMenuItem(
   id,
   data
 );

}
