const express = require('express');
const constant = require('./src/config/constants');

const app = express();

  const port = constant.PORT;
  const origin = constant.URL;
  app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.header('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, authorization, access-token',
    );

    next();
  });
  // Routes for the API
  app.listen(port, async () => {
    try {
      console.log(`bookmyshow-api app listening on port ${port}!`);
    } catch (error) {
      console.log('Error while starting the app', error);
    }
  });

  const Routes = require('./src/routes/Route');
  const router = express.Router();
  Routes.createRoutes(router);
  app.use('/', router);

module.exports = app;