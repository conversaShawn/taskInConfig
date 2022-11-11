const { defineConfig } = require('cypress')
const DownloadAndExtractGraphqlInspector = require('./cypress/gqlExtensionDownloader');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        downloadExtension() {
          DownloadAndExtractGraphqlInspector();
        },
      })
      on('before:browser:launch', async (browser, launchOptions) => {

        // I want to invoke a task that downloads a chrome extension (if it doesn't already exist),
        // then add it to the browser configuration
        cy.task('downloadExtension', { timeout: 1000 }).then((finished) => {
          // We don't make it to this console log because "cy is undefined" on the above line
          console.log(finished);
          launchOptions.extensions.push(
            './path/to/my/downloaded/extension'
          );
        });
      });
    },
  }
})