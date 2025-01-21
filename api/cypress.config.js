const { configurePlugin } = require('cypress-mongodb');

require('dotenv').config()

module.exports = {
  projectId: "c8ce55",
  env: {
    mongodb: {
      uri: process.env.MONGO_URI,
      database: process.env.DATABASE,
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin ( on );
    },
    baseUrl: process.env.API_URL
  },
};
