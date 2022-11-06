import { Button } from "@mantine/core";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { useCallback, useState } from "react";
import { fireApp } from "../firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth(fireApp);

export const Login = () => {
  const [user, setUser] = useState<User | undefined>();

  const handleClick = useCallback(() => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log({
          user,
          token,
        });
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
  }, []);

  return (
    <Button onClick={handleClick} disabled={!!user}>
      Login
    </Button>
  );
};
