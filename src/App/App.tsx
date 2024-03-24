import style from "./style.module.scss";
import { useState, useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";
import { Lists } from "../components/Main/Lists/Lists";
import { Details } from "../components/Main/Details/Details";
import { getData, dataCounter, finishedCounter } from "../data";
import { Data } from "../types";

function App() {
  const [appData, setAppData] = useState(getData());
  const [countTasks, setCountTasks] = useState(dataCounter());
  const [countTasksFinished, setCountTasksFinished] = useState(
    finishedCounter()
  );

  useEffect((): void => {
    setCountTasks(dataCounter());
    setCountTasksFinished(finishedCounter());
  }, [appData]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Lists appData={appData} setAppData={setAppData} />,
    },
    {
      path: "details/:mode/:id",
      element: <Details />,
      loader: ({ params }) => {
        const data: Data = getData();
        const id: string | undefined = params.id;
        const mode: string | undefined = params.mode;
        const res = mode && data[mode].find((task) => task.id === Number(id));
        return {
          task: res,
          mode: mode,
        };
      },
    },
  ]);

  return (
    <div className={style.App}>
      <div>
        <Header />
        <Main router={router} />
      </div>
      <Footer countTasks={countTasks} countTasksFinished={countTasksFinished} />
    </div>
  );
}
export default App;
