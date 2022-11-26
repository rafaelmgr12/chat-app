import { useRef } from "react";
import { Message } from "../Message";
import { style } from "./style";

export function Chat() {
  const scroll = useRef();
  return (
    <>
      <main className={style.main}>{/* Chat Message Component  */}</main>
      <Message/>
      <span ref={scroll}></span>
    </>
  );
}
