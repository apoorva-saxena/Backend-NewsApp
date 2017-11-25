const express = require('express')
const server = express()
const sources = require('./lib/getSources')

server.get('/api/resources', async (req, res) => {
  const resources = await(sources.getAllSources())
  res.send(resources)
})

server.listen(3000)