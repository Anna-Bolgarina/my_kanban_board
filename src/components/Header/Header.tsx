import style from "./style.module.scss";
import { UserMenu } from "./UserMenu/UserMenu";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.header__row}>
          <h1 className={style.header__title}>Awesome Kanban Board</h1>
          <UserMenu />
          </div>
        </div>
      </header>
    </>
  );
}
export { Header };
