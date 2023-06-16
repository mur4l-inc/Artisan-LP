import { initializeApp, getApp, getApps } from 'firebase/app';
import { getRemoteConfig, RemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

const firebaseConfig = {
  apiKey: "AIzaSyAYOF_ML8A3qsyslgQJeQ37ZPiIrdte8wY",
  authDomain: "remoteartisan.firebaseapp.com",
  projectId: "remoteartisan",
  storageBucket: "remoteartisan.appspot.com",
  messagingSenderId: "992684238522",
  appId: "1:992684238522:web:f65d038d23d6f289f68483",
  measurementId: "G-N4KMXXGRR8"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const app = getApp();
const remoteConfig: RemoteConfig = getRemoteConfig(app);

export { remoteConfig };
