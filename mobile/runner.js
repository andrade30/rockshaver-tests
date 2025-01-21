const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZhZWQzMWJmLTJmYzUtNDQ4NC1iZDE4LWUwNzQ0Y2NhMTM5NC0xNzM3NDIzNzM2MTUxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2VkOTRjMzItY2JjMS00Y2Y2LTg5YTUtZGQ0MjZiYjI2ZGUyIiwidHlwZSI6InQifQ.LHTFk3bAJkV3a_R81Qlqb_nf3En2qLYadzx4hmPJzkE'

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