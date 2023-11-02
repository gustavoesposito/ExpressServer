import express from "express";
import UserController from "./controllers/UserControllers";
import redis from "./lib/cache";

const app = express()

app.get('/', (req, res) => res.send('Its working'))

app.get('/users', UserController.find)

app.get('/clear-cache', async(req, res) => {
  await redis.del("user:all")

  res.json({
    ok: true,
  })
} )

app.listen(3000)
