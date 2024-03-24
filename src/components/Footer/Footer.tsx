import style from "./style.module.scss";

interface Props {
  countTasks: number;
  countTasksFinished: number;
}

function Footer({ countTasks, countTasksFinished}:Props) {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__row}>
          <div className={style.footer__row__info}>
            <div className={style.footer__info}>
              Active tasks: <span>{countTasks}</span>
            </div>
            <div className={style.footer__info}>
              Finished tasks: <span>{countTasksFinished}</span>
            </div>
          </div>
          <div className={style.footer__info}>
            Kanban board by <span>Anna Bolgarina,</span>{" "}
            <span>2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
