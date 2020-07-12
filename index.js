const functions = require('firebase-functions');
const omit = require('lodash/omit');

const admin = require('firebase-admin');

admin.initializeApp();

exports.updateUserProfile = functions.https.onCall((data, context) => {
  admin
    .firestore()
    .collection('users')
    .doc(data.uid)
    .set(omit(data, ['uid']));
});

exports.addCustomer = functions.https.onCall((data, context) => {
  admin
    .firestore()
    .collection('customers')
    .doc(data.uid)
    .set({ supplier: data.supplier, status: 'REQUESTED' });
});
