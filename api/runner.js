const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhZWQzMWJmLTJmYzUtNDQ4NC1iZDE4LWUwNzQ0Y2NhMTM5NC0xNzM3NDIyOTc4NTIxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOTY3ZDJkYzEtNjk2YS00NmNjLWI5YTQtMTRmNzkyYjJhZjlkIiwidHlwZSI6InQifQ.blz4UiCdy58jeuGMgRWdF8h06VveMrNCPFTXv72A8_M'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})