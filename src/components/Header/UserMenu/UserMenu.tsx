import { useState } from "react";
import style from "./style.module.scss";
import userAvatar from "../../../img/user-avatar.png";
import arrowDown from "../../../img/arrow-down.svg";
import rhombus from "../../../img/Rectangle 27.svg";

function UserMenu() {
  const [open, setOpen] = useState(false);
  const styleArrow = {
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  };
  return (
    <div onClick={() => setOpen(!open)} className={style.userMenu}>
      <div className={style.userMenu__row}>
        <img
          className={style.userMenu__avatar}
          src={userAvatar}
          alt="User Avatar"
        />
      </div>
      <img
        className={style.userMenu__arrow}
        style={styleArrow}
        src={arrowDown}
        alt="Arrow Down"></img>
      <div
        className={open ? style.userMenu__menu_active : style.userMenu__menu}>
        <img
          className={style.userMenu__rhombus}
          src={rhombus}
          alt="Rhombus"></img>
        <a href="#!">Profile</a>
        <a href="#!">Log Out</a>
      </div>
    </div>
  );
}
export { UserMenu };
