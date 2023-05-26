import { initializeApp, getApp, getApps } from 'firebase/app';
import { getRemoteConfig, RemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

const firebaseConfig = {
  apiKey: "AIzaSyDTF4PBK1-1b_g6tYCtOw4gHO_uLmjFC_c",
  authDomain: "demoapp-5f4ef.firebaseapp.com",
  projectId: "demoapp-5f4ef",
  storageBucket: "demoapp-5f4ef.appspot.com",
  messagingSenderId: "891719275816",
  appId: "1:891719275816:web:9693796d2c0fc6198d6c1d"
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const app = getApp();
const remoteConfig: RemoteConfig = getRemoteConfig(app);

export { remoteConfig };
