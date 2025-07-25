const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
       require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
     
      });
    },
  },
  

  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
