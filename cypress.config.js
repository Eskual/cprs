const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1680,
  viewportHeight: 1050,
  e2e: {
    baseUrl: 'https://github.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
