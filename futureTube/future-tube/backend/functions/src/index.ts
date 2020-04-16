import * as functions from 'firebase-functions';
import firebaseAdmin from 'firebase-admin';
import firebase from 'firebase';
import { AddressInfo } from 'net';
import app from './presentation/index';

exports.app = functions.https.onRequest(app);

const firebaseConfig = {
  apiKey: "AIzaSyAQLekXOHxKvQer4vd06K39cjDTyjt7sXs",
  authDomain: "lubetube-db4e7.firebaseapp.com",
  databaseURL: "https://lubetube-db4e7.firebaseio.com",
  projectId: "lubetube-db4e7",
  storageBucket: "lubetube-db4e7.appspot.com",
  messagingSenderId: "641103399691",
  appId: "1:641103399691:web:1f5c980149ed4f8ec9300e"
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
