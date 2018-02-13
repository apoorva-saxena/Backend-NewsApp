require('dotenv').config()
const config = require('../config')
const axios = require('axios')

exports.getCountryNews = async(country) => {
  const countryNewsUrl = "https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=" + config.key
  const sources = "https://newsapi.org/v2/sources?apiKey=" + config.key

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

  if(countries.includes(country.toLowerCase())) {
    const countryNews = await axios
      .get(countryNewsUrl)
      .then( function (response) {
        return response.data
      })
      .catch( function(err) {
        console.log(err)
      })
      return countryNews
  } else {
    return(" No match")
  }
}