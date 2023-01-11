## The test

This is a second version of the file upload tool from server to facebook server that I found in the following link:

https://developers.facebook.com/docs/marketing-api/conversions-api/using-the-api

To get started with the Facebook Business SDK, in the package.json file:
facebook-nodejs-business-sdk:v8.0.2, with an update all references of the package name to facebook-nodejs-business-sdk

Run npm install

To send requests, new events, make a POST request to this API's /events edge from this path: https://graph.facebook.com/{API_VERSION}/{PIXEL_ID}/events?access_token={TOKEN}. When you post to this edge, Facebook creates new server events.

Run node main.js
