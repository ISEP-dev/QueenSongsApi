import express from 'express'
import bodyParser from 'body-parser'
import {allSongs} from "./songs";

const app = express()

app.use(bodyParser.json())
app.use(function(_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/:text?', (req, res) => {
  const text = req.params.text
  if (!text) {
    return res.status(404)
  }

  const songs = allSongs.filter(s => s.toLowerCase() === text.toLowerCase());
  return res.status(200).set({ 'Content-Type': 'application/json' }).json({songs});
})

export default app
