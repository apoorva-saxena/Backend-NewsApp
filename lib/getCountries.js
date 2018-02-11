require('dotenv').config()
const config = require('../config')
const axios = require('axios')

const sources = "https://newsapi.org/v2/sources?apiKey=" + config.key

exports.getCountries = async() => {
  const resources = await axios
    .get(sources)
    .then(function (response) {
      return response.data.sources
    })
    .catch(function (error) {
      console.log(error);
    })
  let countries = []
  resources.map( resource => {
    if(! countries.includes(resource.country)) {
      countries.push(resource.country)
    }
  })
  return countries
}