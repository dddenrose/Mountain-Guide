import React from "react";
import taiwanMap from "../image/map.jpg";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import LoginPage from "./LoginPage/LoginPage";
import Homepage from "./Homepage/Homepage";

const firebaseConfig = {
  apiKey: "AIzaSyD7V17yI2XCjEGW-780SZBmmP7jmf0Qg88",
  authDomain: "react-mountain-ts.firebaseapp.com",
  projectId: "react-mountain-ts",
  storageBucket: "react-mountain-ts.appspot.com",
  messagingSenderId: "792053469187",
  appId: "1:792053469187:web:fa7b870233443ad22f3e36",
  measurementId: "G-EYJFQWYTYF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Mainpage = () => {
  return (
    <div className="body">
      <LoginPage app={app} />
      <Homepage app={app} />
    </div>
  );
};

export default Mainpage;
