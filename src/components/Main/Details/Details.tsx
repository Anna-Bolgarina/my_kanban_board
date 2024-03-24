import style from "./style.module.scss";
import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Data } from "../../../types";
import { getData, setData } from "../../../data";
import changeImg from "../../../img/pen-svgrepo-com.svg";
import checkMark from "../../../img/checkmark-svgrepo-com.svg";
import close from "../../../img/close-svgrepo-com.svg";

function Details() {
  const res: any = useLoaderData();
  const title = res.task.title;
  const description = res.task.description;
  const [change, setСhange] = useState(false);
  const [changeState, setChangeState] = useState("description");

  const changeDescription = (e: any) => {
    const value: string | null = e.target.value;
    value ? setChangeState(value) : setChangeState("changeState");
  };

  return (
    <div className={style.details}>
      <div className={style.details__content}>
        <div className={style.details__content__up}>
          <h2 className={style.details__title}>{title}</h2>
          <div className={style.details__buttonBlock}>
            <Link
              to={window.location.pathname}
              onClick={() => {
                if (change) {
                  const data: Data = getData();
                  const task = data[res.mode].find(
                    (task) => task.id === Number(res.task.id)
                  );
                  if (task && changeState !== "") {
                    task.description = changeState;
                    setData(data);
                  }
                }
                setСhange(!change);
              }}>
              {change ? (
                <img
                  className={style.details__button__img}
                  src={checkMark}
                  alt="add"></img>
              ) : (
                <img
                  className={style.details__button__img_change}
                  src={changeImg}
                  alt="change"></img>
              )}
            </Link>
            <Link className={style.details__cancelButton} to="/">
              <img
                className={style.details__button__img}
                src={close}
                alt="close"></img>
            </Link>
          </div>
        </div>
        {change ? (
          <textarea
            onChange={(e) => changeDescription(e)}
            className={style.details__changeDescription}
            autoFocus>
            {description}
          </textarea>
        ) : (
          <p className={style.details__changeDescription}>{description}</p>
        )}
      </div>
    </div>
  );
}

export { Details };
