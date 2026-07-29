import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'Restaurant Management System API is running successfully!',
  })
})

Deno.serve(app.fetch)
