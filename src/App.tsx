import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import BlogPage from "./container/BlogPage/BlogPage";
import LoginPage from "./container/LoginPage/LoginPage";
import Root from "./container/Root/Root";
import Homepage from "./container/Homepage/Homepage";

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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "homepage",
          element: <Homepage app={app} />,
          errorElement: <ErrorPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "auth",
          element: <LoginPage app={app} />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
