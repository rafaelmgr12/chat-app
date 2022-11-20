import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";

import { auth } from "../../config/firebase";
import { style } from "./style";


export function Signin() {
  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }
  
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn}/>
    </div>
  );
}
