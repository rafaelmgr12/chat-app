import { style } from "./style";
import { auth } from "../../config/firebase";

export function Logout() {
    

  return <button onClick={()=> auth.signOut()} className={style.button}>Logout</button>;
}
