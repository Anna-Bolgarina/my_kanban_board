import style from "./style.module.scss";

import { RouterProvider } from "react-router-dom";

interface Props {
  router: any;
}

function Main({ router }: Props) {
  return (
    <>
      <main>
        <div className={style.container}>
          <RouterProvider router={router} />
        </div>
      </main>
    </>
  );
}
export { Main };
