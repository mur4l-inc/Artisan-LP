import { initializeApp, getApp, getApps } from 'firebase/app';
import { getRemoteConfig, RemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

// const firebaseConfig = {
//   apiKey: "AIzaSyDTF4PBK1-1b_g6tYCtOw4gHO_uLmjFC_c",
//   authDomain: "demoapp-5f4ef.firebaseapp.com",
//   projectId: "demoapp-5f4ef",
//   storageBucket: "demoapp-5f4ef.appspot.com",
//   messagingSenderId: "891719275816",
//   appId: "1:891719275816:web:9693796d2c0fc6198d6c1d"
// };

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
