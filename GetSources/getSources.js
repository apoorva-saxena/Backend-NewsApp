require('dotenv').config()
const config = require('./config')
const axios = require('axios')

// const techCrunch = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=' + config.key
const sources = "https://newsapi.org/v1/sources"

axios
    .get(sources)
    .then(function (response) {
        return response.data.sources
    })
    .catch(function (error) {
        console.log(error);
    });

//example : 
// {
//     id: 'bloomberg',
//     name: 'Bloomberg',
//     description: 'Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.',
//     url: 'http://www.bloomberg.com',
//     category: 'business',
//     language: 'en',
//     country: 'us',
//     urlsToLogos: {
//         small: '',
//         medium: '',
//         large: ''
//     },
//     sortBysAvailable: ['top']
// }
