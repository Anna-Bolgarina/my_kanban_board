import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { Task, Data } from "../../../types";
import { setData, getData, createId } from "../../../data";
import cross from "../../../img/Vector.svg";
import close from "../../../img/close-svgrepo-com.svg";
import { TaskSelect } from "../TaskSelect/TaskSelect";

interface Props {
  appData: Data;
  setAppData: Function;
  abilityAddTask: boolean;
  title: string;
  tasks: Task[];
  mode: string;
  prevMode: string;
  prevTasks: Task[];
}

function List({
  appData,
  setAppData,
  tasks,
  prevTasks,
  title,
  abilityAddTask,
  mode,
  prevMode,
}: Props) {
  const [stateList, setStateList] = useState(0);
  const [stateTextarea, setStateTextarea] = useState("");
  const [stateButton, setStateButton] = useState(false);

  const addTask = (task: Task, mode: string) => {
    const curList: Task[] = appData[mode];
    curList.push(task);
    setData(appData);
    setAppData(getData());
  };

  const delTask = (task: Task, mode: string) => {
    const curList: Task[] = appData[mode];
    curList.forEach(
      (deletedTask, index) =>
        task.id === deletedTask.id && curList.splice(index, 1)
    );
    setData(appData);
    setAppData(getData());
  };

  useEffect(() => {
    stateTextarea !== "" ? setStateButton(true) : setStateButton(false);
  }, [stateTextarea]);

  const onClickAddCard = () => {
    if (mode === "backlog") {
      setStateList(1);
    } else {
      setStateList(2);
    }
  };

  const onClickSubmitButton = () => {
    const id = createId();
    if (mode === "backlog") {
      const result: Task = {
        id: id,
        title: stateTextarea,
        description: "This task has no description",
      };
      addTask(result, mode);
      onClickCancelButton();
    } else {
      prevTasks.forEach((task) => {
        if (task.title === stateTextarea) {
          addTask(task, mode);
          delTask(task, prevMode);
        }
      });
      onClickCancelButton();
    }
  };

  const onClickCancelButton = () => {
    setStateList(0);
    setStateButton(false);
  };

  return (
    <div className={style.list}>
      <div className={style.list__title}>{title}</div>
      <div className={style.list__tasks}>
        {tasks.map((task) => (
          <Link
            data-testid={`${mode}-task`}
            to={`details/${mode}/${task.id}`}
            key={task.id}>
            <textarea className={style.list__textareaTask}>
              {task.title}
            </textarea>
          </Link>
        ))}

        {stateList === 1 ? (
          <>
            <button
              disabled={!abilityAddTask}
              onClick={onClickCancelButton}
              className={style.list__cancelButton}>
              <img src={close} alt="close"></img>
            </button>
            <textarea
              data-testid={`${mode}-textarea`}
              onChange={(e) => setStateTextarea(e.target.value)}
              className={style.list__textareaTask}
              autoFocus
            />
          </>
        ) : stateList === 2 ? (
          <>
            <button
              disabled={!abilityAddTask}
              onClick={onClickCancelButton}
              className={style.list__cancelButton}>
              <img src={close} alt="close"></img>
            </button>
            <TaskSelect
              tasks={prevTasks}
              onSelect={(select: string) => {
                setStateTextarea(select);
              }}
            />
          </>
        ) : (
          ""
        )}
      </div>

      {stateList ? (
        <div className={style.list__button}>
          <button
            data-testid={`${mode}-button`}
            disabled={!abilityAddTask}
            onClick={stateButton ? onClickSubmitButton : onClickAddCard}
            className={
              stateButton ? style.list__submitButton : style.list__addButton
            }>
            <img src={cross} alt="cross"></img>
            <span>{stateButton ? "Submit" : "Add card"}</span>
          </button>
        </div>
      ) : (
        <button
          data-testid={`${mode}-button`}
          disabled={!abilityAddTask}
          onClick={onClickAddCard}
          className={style.list__addButton}>
          <img src={cross} alt="cross"></img>
          <span>{stateButton ? "Submit" : "Add card"}</span>
        </button>
      )}
    </div>
  );
}

export { List };
