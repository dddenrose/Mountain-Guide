import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const LoginPage = ({ app }: { app: {} }) => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [displayUserInfo, setDisplayUserInfo] = React.useState<any>({
    name: "",
    email: "",
  });
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });
  const auth = getAuth();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayUserInfo({
          name: user.displayName,
          email: user.email,
        });
      } else {
      }
    });
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user: any = result?.user;
        setUserInfo(user);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error, "An error happened");
        // An error happened.
      });
  };

  return (
    <div>
      Login Page
      <div>
        userName: {displayUserInfo.name || "none"}
        email: {displayUserInfo.email || "none"}
      </div>
      <button onClick={signIn}>Login</button>
      <button onClick={signOutUser}>signOutUser</button>
    </div>
  );
};

export default LoginPage;
