'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // Server Address
  addr:     process.env.SERVER_ADDRESS ||
            "https://rcos.io",

  // Location of image uploads
  imageUploadPath: '/home/deploy/uploads/images/',

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/observatory3'
  },

  // Rollbar server-side access token
  rollbarServerAccessToken: process.env.ROLLBAR_SERVER_ACCESS_TOKEN || ''
};
