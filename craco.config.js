/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
    // ...
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { 
                    // '@primary-color': '#E7E7E7;',
                    // '@text-color': '#919191', // major text color
                    // '@text-color-secondary': '#BABABA', // secondary text 
                    // '@success-color': '#434343',
                },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
  };