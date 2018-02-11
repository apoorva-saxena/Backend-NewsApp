const express = require('express')
require('dotenv').config()
const config = require('./config')
const server = express()
const sources = require('./lib/getSources')
const sourceData = require('./lib/getSourceData')
const selectedNews = require('./lib/selectedNews')
const bodyParser = require('body-parser').json();
const session = require('express-session');

server.use(session({secret: config.sessionKey}));

server.get('/api/resources', async(req, res) => {
  const resources = await(sources.getAllSources())
  res.send(resources)
})

server.get('/api/resources/:sectionName', async(req, res) => {
  const sectionData = await(sourceData.getSourceData(req.params.sectionName))
  res.send(sectionData)
})

// server.post('/api/selected', bodyParser, (req, res) => {
//   const selected = req.body.selected
//   sess = req.session
//   sess.selected = req.body.selected
//   res
//     .status(200)
//     .send("Success");
// })

// server.get('/api/selected-news', async(req, res) => {
//   let allNews = "No news to display"
//   if(sess.selected) {
//     allNews = await(selectedNews.getSelectedNews(sess.selected))
//   }
//   res.send(allNews)
// })

server.listen(3000)