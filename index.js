const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});

exports.sayMyName = functions.https.onCall((data, context) => {
  return `Hello ${data.name}`;
});
