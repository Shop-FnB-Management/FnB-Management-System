import { Hono } from 'hono'

export const app = new Hono();


app.get("/", (c) => {
  return c.json({
    message: "Restaurant API"
  });
});

app.get("/health", (c)=>{

  return c.json({
    status:"ok",
    service:"restaurant-api"
  });

});