const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhZWQzMWJmLTJmYzUtNDQ4NC1iZDE4LWUwNzQ0Y2NhMTM5NC0xNzM3NDIzOTUzNzQ5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNGYyMDUxYTctM2M3MC00MTc3LWJmNzgtZjY2YWMyNWEyOWY3IiwidHlwZSI6InQifQ.eazDSnWV194MuUmo7nL1t3258gGqYTMYMfGWRv9n_nQ'

cypress.run({
  browser: 'chrome'
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