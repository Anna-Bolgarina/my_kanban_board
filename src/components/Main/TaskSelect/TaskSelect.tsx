import { useState, useRef, useLayoutEffect, useEffect } from "react";
import style from "./style.module.scss";
import { Task } from "../../../types";
import arrowSelect from "../../../img/Vector 1.svg";

interface Props {
  tasks: Task[];
  onSelect: Function;
}
function TaskSelect({ tasks, onSelect }: Props) {
  const [show, setShow] = useState(false);
  const [activeSelect, setActiveSelect] = useState("");

  useEffect(() => {
    onSelect(activeSelect);
  }, [activeSelect, onSelect]);

  const refTaskSelect = useRef(null);
  const refTaskSelectActive = useRef(null);

  const [heightTaskSelect, setHeightTaskSelect] = useState(0);
  const [heightTaskSelectActive, setHeightTaskSelectActive] = useState(0);

  useLayoutEffect(() => {
    const curTaskSelect: any = refTaskSelect.current;
    const curTaskSelectActive: any = refTaskSelectActive.current;

    curTaskSelect && setHeightTaskSelect(curTaskSelect.clientHeight);
    curTaskSelectActive &&
      setHeightTaskSelectActive(curTaskSelectActive.clientHeight);
  }, []);

  const styleTaskSelect = {
    height: show ? heightTaskSelect : heightTaskSelectActive,
  };

  const styleArrow = {
    transform: show ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <div
      onClick={() => setShow(!show)}
      className={style.taskSelect}
      style={styleTaskSelect}
      data-testid="TaskSelect">
      <div ref={refTaskSelect} className={style.taskSelect__wrap}>
        <div ref={refTaskSelectActive} className={style.taskSelect__active}>
          <p>{activeSelect}</p>
          <img
            style={styleArrow}
            src={arrowSelect}
            alt="Arrow Select"></img>
        </div>
        <div className={style.taskSelect__choices}>
          {tasks.map((task) => (
            <div
              data-testid="TaskSelectСhoice"
              key={task.id}
              onClick={() => {
                setActiveSelect(task.title);
              }}
              className={style.taskSelect__choice}>
              {task.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TaskSelect };
