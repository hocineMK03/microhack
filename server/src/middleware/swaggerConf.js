const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your Express.js application',
    },
  },
  apis: [path.resolve(__dirname, '../routes/*.js')], // Path to the route files
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
