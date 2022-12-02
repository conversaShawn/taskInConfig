const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        on('before:browser:launch', (browser, launchOptions) => {
          
          launchOptions.extensions.push(
            '/Users/shawn/Desktop/path/to/extension'
          );
          return launchOptions
        })
      }
  }
})