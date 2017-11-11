require('dotenv').config()
const express = require('express')
const server = express()
const getNews = require('./getNews')
console.log(getNews)

const config = require('./config')
// const app = require('./src/server')

console.log(config.key)

server.listen(3000)