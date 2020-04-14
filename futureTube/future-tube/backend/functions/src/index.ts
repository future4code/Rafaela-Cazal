import * as functions from 'firebase-functions';
import firebaseAdmin from 'firebase-admin';
import firebase from 'firebase';
import { AddressInfo } from 'net';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: true }), express.json());
exports.app = functions.https.onRequest(app);

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PRJCT_ID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MSG_SENDER_ID,
    appId: process.env.APP_ID
  };

firebaseAdmin.initializeApp(functions.config().firebase);
firebase.initializeApp(firebaseConfig);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`server is running in http://localhost:${address.port}`);
  } else {
    console.error('Failure upon starting server.');
  }
});
