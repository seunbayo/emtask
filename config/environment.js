"use strict";

module.exports = function (environment) {
  let ENV = {
    firebase: {
      apiKey: "AIzaSyC0ax18sOYuYpNAlEWMQ8YDldRfCS-ZRlY",
      authDomain: "emtask-62498.firebaseapp.com",
      projectId: "emtask-62498",
      storageBucket: "emtask-62498.appspot.com",
      messagingSenderId: "152642830016",
      appId: "1:152642830016:web:7b4471d94dd9d6a50eb725",
      measurementId: "G-2VJ3JDHHD1",
    },
    modulePrefix: "emtask",
    environment,
    rootURL: "/",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
