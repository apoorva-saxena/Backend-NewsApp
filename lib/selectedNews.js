require('dotenv').config()
const config = require('../config')
const axios = require('axios')

exports.getSelectedNews = async(selected) => {
  let links = []
  let allNews = []

  selected.map(source => {
    links.push('https://newsapi.org/v2/articles?source=' + source + '&apiKey=' + config.key)
  })
  console.log(links)
  const allSourceNews = await Promise.all(links.map(link => {
    return axios
      .get(link)
      .then(response => response.data)
      .catch(error => console.log(error))
  }))

  allSourceNews.map(source => source.articles.map(news => {
    news.source = source.source
    allNews.push(news)
  }))

  allNews.sort(function (a, b) {
    return a.publishedAt < b.publishedAt;
  })

  return allNews
}
