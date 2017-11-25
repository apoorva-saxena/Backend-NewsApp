require('dotenv').config()
const config = require('../config')

const axios = require('axios')

// const techCrunch =
// 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=' + config.key

exports.getSelectedNews = async(selected) => {
  let links = []
  selected.map(source => {
    links.push('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + config.key)
  })
  console.log(links)
  const allNews =  await Promise.all(links.map( link => {
    return axios 
      .get(link)
      .then( response => response.data)
      .catch( error => console.log(error))
  }))
return allNews
  // const sortedNews = allNews.sort()
}