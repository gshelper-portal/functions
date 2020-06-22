const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp();

exports.createUserProfile = functions.https.onCall((data, context) => {
  admin.firestore().collection('users').doc(data.uid).set(data);
});
