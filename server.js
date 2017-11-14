const express = require('express')
const server = express()
const getNews = require('./GetSources')

const config = require('./config')
// const app = require('./src/server')

console.log(config.key)

server.listen(3000)