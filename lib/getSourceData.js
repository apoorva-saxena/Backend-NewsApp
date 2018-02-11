require('dotenv').config()
const config = require('../config')
const axios = require('axios')

const sources = "https://newsapi.org/v2/sources?apiKey=" + config.key

exports.getSourceData = async(category) => {
  const resources = await axios
    .get(sources)
    .then(function (response) {
      return response.data.sources
    })
    .catch(function (error) {
      console.log(error);
    }) 
    let sourceData = []
    resources.map( resource => {
      if(resource.category === category) {
        sourceData.push(resource)
      }
    })
    return sourceData
}
