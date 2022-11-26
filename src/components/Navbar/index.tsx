import { style } from "./style";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Signin } from "../Signin";
import { Logout } from "../Logout";

export function Navbar() {
    const [user] = useAuthState(auth);


  return (
    <div className={style.nav}>
      <h1 className={style.heading}>
            Chat App
      </h1>
      {user ? <Logout /> : <Signin />}

    </div>
  );
}
