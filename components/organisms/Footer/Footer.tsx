import React, { useState } from "react";
import style from "./footer.module.scss";
import cn from "classnames";

export default function Footer(): JSX.Element {
  const [isHide, setHide] = useState(true);
  return (
    <div className={style.container}>
      <div
        className={style.menuIcon}
        onClick={() => {
          isHide ? setHide(false) : setHide(true);
        }}
      >
        icon
      </div>
      <div
        className={cn(style.mainFooter, isHide && style.hide)}
      ></div>
    </div>
  );
}
