require('dotenv').config()
const config = require('../config')
const axios = require('axios')

const sources = "https://newsapi.org/v1/sources"

exports.getAllSources = async() => {
    const resources = await axios
        .get(sources)
        .then(function (response) {
            return response.data.sources
        })
        .catch(function (error) {
            console.log(error);
        }) 
    return resources
}
