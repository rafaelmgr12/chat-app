import { style } from "./style";

export function Message() {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>Dave</p>
        <p> Im learning React!</p>
      </div>
    </div>
  );
}
