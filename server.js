const express = require('express')
const server = express()
const sources = require('./lib/getSources')
const selectedNews = require('./lib/selectedNews')
const bodyParser = require('body-parser').json();

server.get('/api/resources', async(req, res) => {
  const resources = await(sources.getAllSources())
  res.send(resources)
})

server.post('/api/selected', bodyParser, async(req, res) => {
  const selected = req.body.selected
  const allNews = await(selectedNews.getSelectedNews(selected))
  res
    .status(200)
    .send(allNews);
})
  

server.listen(3000)