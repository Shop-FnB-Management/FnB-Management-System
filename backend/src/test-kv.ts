import { kv } from "./db/kv.ts";


await kv.set(
  ["test"],
  {
    message: "Hello KV"
  }
);


const result = await kv.get(
  ["test"]
);


console.log(result.value);
