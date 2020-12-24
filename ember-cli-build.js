'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 4,
      importBootstrapCSS: true
    }
  });

  return app.toTree();
};
