import { kv } from "../../db/kv.ts";

import { Keys } from "../../db/keys.ts";

import { MenuItem } from "./types.ts";

export async function createMenuItem(
 item: MenuItem
){

 await kv.set(
   Keys.menu(item.id),
   item
 );

 return item;

}

export async function findMenuItem(
 id:string
){

 const result = await kv.get<MenuItem>(
   Keys.menu(id)
 );

 return result.value;

}

export async function findAllMenu(){

 const items:MenuItem[] = [];

 for await(
  const item of kv.list<MenuItem>({
    prefix:["menu"]
  })
 ){

   items.push(item.value);

 }

 return items;

}

export async function updateMenuItem(
 id:string,
 data:Partial<MenuItem>
){

 const existing =
 await findMenuItem(id);


 if(!existing){

   return null;

 }


 const updated = {

   ...existing,

   ...data

 };


 await kv.set(
   Keys.menu(id),
   updated
 );

 return updated;

}

export async function deleteMenuItem(
 id:string
){

 await kv.delete(
   Keys.menu(id)
 );

 return true;

}
